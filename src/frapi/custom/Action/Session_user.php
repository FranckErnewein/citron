<?php

/**
 * Action Session_user 
 * 
 * Array
 * 
 * @link http://getfrapi.com
 * @author Frapi <frapi@getfrapi.com>
 * @link /session/user
 */
class Action_Session_user extends Frapi_Action implements Frapi_Action_Interface
{

    /**
     * Required parameters
     * 
     * @var An array of required parameters.
     */
    protected $requiredParams = array();

    /**
     * The data container to use in toArray()
     * 
     * @var A container of data to fill and return in toArray()
     */
    private $data = array();

    /**
     * To Array
     * 
     * This method returns the value found in the database 
     * into an associative array.
     * 
     * @return array
     */
    public function toArray()
    {
        return $this->data;
    }

    /**
     * Default Call Method
     * 
     * This method is called when no specific request handler has been found
     * 
     * @return array
     */
    public function executeAction()
    {
        return $this->toArray();
    }

    /**
     * Get Request Handler
     * 
     * This method is called when a request is a GET
     * 
     * @return array
     */
    public function executeGet()
    {

        $this->data['session_id'] = session_id();
        
        if(isset($_SESSION['user_id'])){
            
            $this->data['user_id'] = $_SESSION['user_id'];
        }

        
        

        return $this->toArray();
    }

    /**
     * Post Request Handler
     * 
     * This method is called when a request is a POST
     * 
     * @return array
     */
    public function executePost()
    {
        
        //$this->executeDelete();

        
        
        if( isset($this->params['email']) && isset($this->params['password']) ){

            
            $m = new ModelManager('user');
            
            $user = $m->read(
                array(
                    'clause' => array(
                        'email' => $this->params['email'],
                        'password' => $this->params['password']
                    ),
                    'operator' => 'AND'
                )
            );


            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_type'] = $user['type'];

        }
        
        
        return $this->executeGet();
        
        //return $this->toArray();
    }

    /**
     * Put Request Handler
     * 
     * This method is called when a request is a PUT
     * 
     * @return array
     */
    public function executePut()
    {
        return $this->toArray();
    }

    /**
     * Delete Request Handler
     * 
     * This method is called when a request is a DELETE
     * 
     * @return array
     */
    public function executeDelete()
    {
        unset($_SESSION['user_id']);
        unset($_SESSION['user_type']);
        return $this->toArray();
    }

    /**
     * Head Request Handler
     * 
     * This method is called when a request is a HEAD
     * 
     * @return array
     */
    public function executeHead()
    {
        return $this->toArray();
    }


}

