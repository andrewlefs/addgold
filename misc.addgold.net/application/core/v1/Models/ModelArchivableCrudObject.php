<?php

namespace Misc\Models;

abstract class ModelArchivableCrudObject extends ModelCrudObject {

   /**
   * Archive this object
   *
   * @param array $params
   * @return void
   */
  public function archive(array $params = array()) {
   
  }

  /**
   * Delete this object
   *
   * @param array $params
   * @return void
   */
  public function delete(array $params = array()) {
    
  }
}
