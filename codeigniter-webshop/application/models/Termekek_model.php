<?php

class Termekek_model extends CI_Model {
	function __construct(){
		parent::__construct();

		$this->load->database();
	}

	function getAll() {
		return $this->db->get("termek")->result();
	}

	function get($azon) {
		$element = $this->db->get_where("termek", "azon = $azon")->result();
		if(count($element) > 0){
			return $element[0];
		} else {
			return null;
		}
	}

	function getCartSize(){
		$cart = $this->session->userdata('CART');
		if(!$cart){
			$cart = Array();
		}

		$size = 0;
		$value = 0;
		foreach($cart as $azon){
			$item = $this->Termekek_model->get($azon);
			$size++;
			$value += $item->ar;
		}

		return Array(
			"size" => $size,
			"value" => $value
		);
	}


	/*
	function update($id, $row) {
		$this->db->set($row);
		$id = $this->db->escape($id);
		$this->db->where("id = $id");
		return $this->db->update("news", $row);
	}

	function insert($row) {
		return $this->db->insert("news", $row);
	}

	function delete($id) {
		$id = $this->db->escape($id);
		return $this->db->delete("news", "id = $id");
	}
	*/
}
