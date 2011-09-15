<?php
/**
 * Classe de gestion des langues
 */
class lang extends corePlugin
{
    public $m_aLng         = array(); // Tableau regroupant toutes les langues disponibles du site avec les infos nécessaires tel que celle par defaut et celle selectionnée
    public $m_aCurrentLang = array(); // Tableau des infos du language utilisé dans la page
    private $m_a           = array(); // Tableau de toutes les valeurs de language disponible pour la page en cour

    /**
     * réagit à l'evenement onstart du framework
     * @todo filtrer language
     */
    public function onStart() {
        $lng = coreModel::factory('language');
        $l_oSqlResult = $lng->getAll();
        if (!$l_oSqlResult) {
            throw new Exception('Aucuns language disponible pour le site : ' . __METHOD__);
        }
        $l_bLangDefined = FALSE;
        if (filter_has_var(INPUT_GET, 'lng')) {
            $l_sLangRequested = filter_input(INPUT_GET, 'lng', FILTER_SANITIZE_SPECIAL_CHARS);
            $l_bLangDefined = TRUE;
        } elseif (isset($_SESSION['lng'])) {
            $l_sLangRequested = $_SESSION['lng'];//en attente de INPUT_SESSION filter_input(INPUT_SESSION, 'lng', FILTER_SANITIZE_SPECIAL_CHARS)
            $l_bLangDefined = TRUE;
        }

        $l_sLangRequested = ($l_bLangDefined) ? $l_sLangRequested : core::$config['lng']['default'];

        if (is_array($l_oSqlResult) && count($l_oSqlResult)) {
            foreach ($l_oSqlResult AS $l_aLng) {
                $this->m_aLng[$l_aLng['lang_iso']] = $l_aLng;// remplis le tableau de language disponible
                if ($l_aLng['lang_iso'] == $l_sLangRequested) {
                    // defini le language courant
                    $this->m_aCurrentLang = $l_aLng;
                }
                // defini le language par defaut
                $this->m_aLng[$l_aLng['lang_iso']]['default'] = ($l_aLng['lang_iso'] == core::$config['lng']['default']) ? TRUE : FALSE;
                // defini le language courant
                $this->m_aLng[$l_aLng['lang_iso']]['current'] = ($l_aLng['lang_iso'] == $l_sLangRequested) ? TRUE : FALSE;
            }
        } else {
            throw new Exception('Aucuns language disponible pour le site : ' . __METHOD__);
        }

        $_SESSION['lng'] = $this->m_aCurrentLang['lang_iso'];
    }
    
    /**
     * réagit à l'evenement onPostRequest du framework
     */
    public function onPostRequest() {
        if (core::instance()->getRequest()->getModule() == 'admin') {
            // si on est dans l'admin on inclu le fichier commun de l'admin
            $this->addLang('admin/common');
        } else {
            // inclusions du fichier common.php pour recuperer les valeurs communes du language
            $this->addLang('common');
        }
    }
    
    /**
     * definition des accesseurs
     */
    public function getAllLang() {
        return $this->m_aLng;
    }
    
    /**
     * definition des accesseurs
     */
    public function getAllLangValues() {
        return $this->m_a;
    }
    
    /**
     * definition des accesseurs
     */
    public function getCurrentLang() {
        return $this->m_aCurrentLang;
    }
    
    /**
     * definition des accesseurs
     */
    public function getCurrentLangIso() {
        return $this->m_aCurrentLang['lang_iso'];
    }
    
    /**
    * Ajout d'un fichier de langue ou plusieurs au tableau de valeurs
    * @param mixed $p_mFile Chaine ou tableau pour plusieurs fichiers, permet de definir les fichiers à ajouter
    */
    public function addLang($p_mFile) {
        if (isset($this->m_aCurrentLang['lang_iso'])) {
            if (is_string($p_mFile)) {
                $l_sFilePath = core::$config['lng']['folder'] . $this->m_aCurrentLang['lang_iso'] . '/' . $p_mFile . '.php';
                // traitement de l'inclusion des fichiers de langues
                if (!file_exists($l_sFilePath)) {
                    throw new Exception('Le fichier de lang "'.core::$config['lng']['folder'] . $this->m_aCurrentLang['lang_iso'] . '/' . $p_mFile.'.php" n\'existe pas : ' . __METHOD__);
                } else {
                    require_once($l_sFilePath);
                    if (isset($l_aLngValue) && is_array($l_aLngValue)) {
                        $this->m_a = array_merge($this->m_a, $l_aLngValue);
                    }
                }
                if (core::instance()->getRequest()->getModule() != 'admin') {
                    // traitement des valeurs provenant de la base de données
                    $lng = coreModel::factory('language');
                    $l_oSqlResult = $lng->getDbValue($p_mFile);
                    if (is_array($l_oSqlResult) && count($l_oSqlResult)) {
                        foreach ($l_oSqlResult AS $l_aLng) {
                            $this->m_a[$l_aLng['key']] = $l_aLng['value'];
                        }
                    }
                }
            } elseif (is_array($p_mFile) && count($p_mFile)) {
                // si c'est un tableau on ajoute recursivement tout les fichiers en rappelant la methode
                foreach ($p_mFile AS $file) {
                    $this->addLang($file);
                }
            }
        }
    }
    
    /**
    * Accesseur du tableau de valeurs du language
    * @param string $p_sKey Clef permettant l'acces à la valeurs demandé
    */
    public function translate($p_sKey) {
        if (isset($this->m_a[$p_sKey])) {
            return $this->m_a[$p_sKey];
        }
    }

    /**
     * Methode de traduction des dates du site
     * @param string $p_sDate La chaine date a traduire
     * @param string $p_sLang Language dans lequel on veut la traduction, si pas defini
     * on utilise le language courant
     */
    public function translateDate($p_sDate) {
        if (!isset($this->m_a['DATE_DICTIONARY'])) {
            $this->addLang('date');// ajout du fichier de date du language si pas inclus
        }
        return str_replace(array_keys($this->m_a['DATE_DICTIONARY']), array_values($this->m_a['DATE_DICTIONARY']), $p_sDate);
    }
    
    /**
    * Declenchée sur l'evenement onEcho du framework
    * permet de remplacer les cle par les valeur de language
    * sous la forme <!--#L_KEY--> dans le rendu final
    */
    public function onEcho(){
        $l_sView = core::instance()->getViewContent();
        if (count($this->m_a)) {
            foreach ($this->m_a AS $l_sKey => $l_sVar) {
                if (is_string($l_sKey) && !is_array($l_sVar) && strlen($l_sVar)) {
                    $l_sView = str_replace('<!--#L_'.$l_sKey.'-->', $l_sVar, $l_sView);
                }
            }
        }
        core::instance()->resetViewContent($l_sView);
    }
}