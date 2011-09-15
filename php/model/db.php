<?php
/**
 * Classe de gestion de base MySql avec MySqli
 */
class db extends corePlugin
{
    protected $m_oDb;     // Object connection a la base
    protected $m_oResult; // Objet resultat
    protected $m_aConf;   // Configuration de la class DB
    public $m_iRequestNb; // Nombre de requete effectuées par la classe

    /**
     * réagit on onstart du framework, initialise la connexion mysqli
     */
    public function onStart() {
        $this->m_iRequestNb = 0;
        $this->m_aConf = core::$config['db'];
        $this->m_oDb = new mysqli($this->m_aConf['host'], $this->m_aConf['username'], $this->m_aConf['passwd'], $this->m_aConf['dbname'], $this->m_aConf['port']);
        //definition du charset de la connexion
        if (!$this->m_oDb->set_charset($this->m_aConf['charset'])) {
            throw new Exception('Le jeu de caractère \'' . $this->m_aConf['charset'] . '\' n\'a pas pu etre defini pour la connexion à la base (Valeur courante :utf8, latin1, etc.) : ' . __METHOD__);
        }
    }
    
    /**
     * destructeur
     */
    public function __destruct() {
        $this->m_oDb->close();
    }
    
    /**
     * Lance une requete
     * @param string $p_rSql Requete
     * @return array Tableau de resultats
     */
    public function query($p_rSql) {
        $this->m_oResult = $this->m_oDb->query($p_rSql);
        $return = array();// tableau permettant de retourner l'ensemble des résultat
        if ($this->m_oResult) {
            if (strchr($p_rSql,"SELECT ")) {
                while ($row = $this->m_oResult->fetch_array(MYSQLI_ASSOC)){
                    $return[] = $row;
                }
                $this->m_oResult->close();
            }
            $this->m_iRequestNb++;
            return $return;
        } else {
            throw new Exception('Classe DB : erreur sql "'.$p_rSql.'" : ' . __METHOD__);
        }
    }
    
    /**
     * Lance une requete et recupere la premiere ligne
     * @param string $p_rSql Requete
     * @return object Contient en variable membre le retour de chaque champ de la requete
     */
    public function queryRow($p_rSql) {
        $this->m_oResult = $this->m_oDb->query($p_rSql);
        if ($this->m_oResult) {
            $this->m_iRequestNb++;
            return $this->m_oResult->fetch_object();
        } else {
            throw new Exception('Classe DB : erreur sql : ' . __METHOD__);
        }
    }
    
    /**
     * Lance une requete et recupere la premiere ligne
     * @param string $p_rSql Requete
     * @return object Contient en variable membre le retour de chaque champ de la requete
     */
    public function queryRowToArray($p_rSql) {
        $this->m_oResult = $this->m_oDb->query($p_rSql);
        if ($this->m_oResult) {
            $this->m_iRequestNb++;
            return $this->m_oResult->fetch_array(MYSQLI_ASSOC);
        } else {
            throw new Exception('Classe DB : erreur sql : ' . __METHOD__);
        }
    }
    
    /**
     * Lance une requete et recupere le premier enregistrement de la
     * premiere ligne.
     * @param string $p_rSql Requete
     * @return array Tableau indexé de la premiere ligne ou FALSE
     */
    public function queryOne($p_rSql) {
        $this->m_oResult = $this->m_oDb->query($p_rSql);
        if ($this->m_oResult) {
            $this->m_iRequestNb++;
            $row = $this->m_oResult->fetch_row();
            return $row[0];
        } else {
            throw new Exception('Classe DB : erreur sql "'.$p_rSql.'" : ' . __METHOD__);
        }
    }
    
    /**
     * Renvoi le dernier id inséré en base
     */
    public function lastId() {
        return $this->m_oDb->insert_id;
    }
    
    /**
     * Renvoi le nombre d'enregistrement dans le resultat de la requete
     */
    public function rowCount() {
        return $this->m_oResult->num_rows;
    }
    
    /**
     * Encrypte un chaine selon un hash MD5 ou SHA1 auquel une graine à été
     * ajouté.
     * @param string $p_sString Mot de passe
     * @param string $p_sEnc Encodage utilisé
     *
     * @return string Chaine encodé
     */
    public function enc($p_sString, $p_sEnc = 'MD5') {
        if (strtoupper($p_sEnc) == 'SHA' || strtoupper($p_sEnc) == 'SHA1') {
            return SHA1($this->m_aConf['seed'].$p_sString);
        } else {
            return MD5($this->m_aConf['seed'].$p_sString);
        }
    }
    
    /**
     * Echappe une chaine de caractère
     * @param string $p_sString Chaine à échapper
     *
     * @return string Chaine echappée
     */
    public function quote($p_sString) {
        if (!is_array($p_sString)){
            return $this->m_oDb->real_escape_string($p_sString);
        } else {
            return FALSE;
        }
    }
}