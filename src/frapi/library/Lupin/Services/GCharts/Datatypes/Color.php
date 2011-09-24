<?php
/**
 * @author Echolibre ltd. 2009 <freedom@echolibre.com> 
 * @copyright Echolibre ltd. 2009
 */
class Lupin_Services_GCharts_Datatypes_Color
{
    private $color;
    
    public function __construct(array $color)
    {
        $this->color = $color;
    }
    
    public function __toString()
    {
        return implode(',', $this->color);
    }
    
}