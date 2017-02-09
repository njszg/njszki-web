<?php

class News_model extends CI_Model {
	function __construct(){
		parent::__construct();

		$this->load->database();
	}

	function getAll() {
		return $this->db->get("news")->result();
	}

	function get($id) {
		return $this->db->get_where("news", "id = $id")->result();
	}

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
}
