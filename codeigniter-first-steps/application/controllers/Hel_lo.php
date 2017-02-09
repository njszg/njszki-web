<?php

class Hel_lo extends CI_Controller {

	public function index() {
		$this->load->view('hel_lo');
	}

	public function zsiraf() {
		echo "Zsiráf";
	}

	public function almafa($param, $param2) {
		echo "Almafa: ".$param.":".$param2;
	}

}
