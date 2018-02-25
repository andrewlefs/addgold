<?php


namespace Misc\Enum;

abstract class AbstractEnum implements EnumInstanceInterface {

  /**
   * @var array|null
   */
  protected $map = null;

  /**
   * @var array|null
   */
  protected $names = null;

  /**
   * @var array|null
   */
  protected $values = null;

  /**
   * @var array|null
   */
  protected $valuesMap = null;

  /**
   * @var AbstractEnum[]
   */
  protected static $instances = array();

  /**
   * @return string
   */
  static function className() {
    return get_called_class();
  }

  /**
   * @return AbstractEnum
   */
  public static function getInstance() {
    $fqn = get_called_class();
    if (!array_key_exists($fqn, static::$instances)) {
      static::$instances[$fqn] = new static();
    }

    return static::$instances[$fqn];
  }

  /**
   * @return array
   */
  public function getArrayCopy() {
    if ($this->map === null) {
      $this->map = (new \ReflectionClass(get_called_class()))
        ->getConstants();
    }

    return $this->map;
  }

  /**
   * @return array
   */
  public function getNames() {
    if ($this->names === null) {
      $this->names = array_keys($this->getArrayCopy());
    }

    return $this->names;
  }

  /**
   * @return array
   */
  public function getValues() {
    if ($this->values === null) {
      $this->values = array_values($this->getArrayCopy());
    }

    return $this->values;
  }

  /**
   * @return array
   */
  public function getValuesMap() {
    if ($this->valuesMap === null) {
      $this->valuesMap = array_fill_keys($this->getValues(), null);
    }

    return $this->valuesMap;
  }

  /**
   * @param string|int|float $name
   * @return mixed
   */
  public function getValueForName($name) {
    return array_key_exists($name, $this->getArrayCopy())
      ? $this->getArrayCopy()[$name]
      : null;
  }

  /**
     * Get error message of a value. It's actually the constant's name
     * @param integer $value
     * 
     * @return string
     */
    public static function getNameForValue($value) {
        $fqn = get_called_class();        
        $class = new \ReflectionClass($fqn);        
        $constants = array_flip($class->getConstants());        
        return $constants[$value];
    }
  /**
   * @param string|int|float $name
   * @return mixed
   * @throws \InvalidArgumentException
   */
  public function assureValueForName($name) {
    $value = $this->getValueForName($name);
    if ($value === null) {
      throw new \InvalidArgumentException(
        'Unknown name "'.$name.'" in '.static::className());
    }

    return $value;
  }

  /**
   * @param string|int|float $name
   * @return bool
   */
  public function isValid($name) {
    return array_key_exists($name, $this->getArrayCopy());
  }

  /**
   * @param string|int|float $name
   * @throws \InvalidArgumentException
   */
  public function assureIsValid($name) {
    if (!array_key_exists($name, $this->getArrayCopy())) {
      throw new \InvalidArgumentException(
        'Unknown name "'.$name.'" in '.static::className());
    }
  }

  /**
   * @param string|int|float $value
   * @return bool
   */
  public function isValidValue($value) {
    return array_key_exists($value, $this->getValuesMap());
  }

  /**
   * @param mixed $value
   * @throws \InvalidArgumentException
   */
  public function assureIsValidValue($value) {
    if (!$this->isValidValue($value)) {
      throw new \InvalidArgumentException(
        '"'.$value.'", not a valid value in '.static::className());
    }
  }
}
