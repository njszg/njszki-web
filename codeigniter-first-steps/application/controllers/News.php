<?php

class News extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('News_model');
		$this->load->helper('form');
		$this->load->helper('url');
	}

	public function index() {
		$data = $this->News_model->getAll();
		$this->load->view("news", array("records" => $data));
	}

	public function add() {
		$this->load->view("news_add");
	}

	public function add_submit() {
		$text = $this->input->post('text');
		$row = array('text' => $text);
		if($this->News_model->insert($row)){
			redirect(base_url().'index.php/news/');
		} else {
			echo "Hiba történt!";
		}
	}

	public function get($id) {
		$data = $this->News_model->get($id);
		if(count($data) > 0){
			$this->load->view("news_get", array("row" => $data[0]));
		} else {
			echo "Nincs ilyen id.";
		}
	}

	public function update($id) {
		$data = $this->News_model->get($id);
		if(count($data) > 0){
			$this->load->view("news_update", array('id' => $data[0]->id, 'text' => $data[0]->text));
		} else {
			echo "Nincs ilyen id.";
		}
	}

	public function update_submit($id) {
		$text = $this->input->post('text');
		$row = array('text' => $text);
		if($this->News_model->update($id, $row)){
			redirect(base_url().'index.php/news/');
		} else {
			echo "Hiba történt!";
		}
	}

	public function delete($id) {
		if($this->News_model->delete($id)){
			redirect(base_url().'index.php/news/');
		} else {
			echo "Hiba történt!";
		}
	}
}
