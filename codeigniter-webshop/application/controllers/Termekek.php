<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Termekek extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->library('session');
		$this->load->model('Termekek_model');
	}

	public function index(){
		$termekek = $this->Termekek_model->getAll();
		$kosar = $this->Termekek_model->getCartSize();

		$this->load->view('termek_lista', Array("termekek" => $termekek, "kosar" => $kosar));
	}

	public function kosar(){
		$cart = $this->session->userdata('CART');
		if(!$cart){
			$cart = Array();
		}

		$termekek = Array();
		foreach($cart as $item){
			$termekek[] = $this->Termekek_model->get($item);
		}

		$kosar = $this->Termekek_model->getCartSize();

		$this->load->view('kosar_lista', Array("termekek" => $termekek, "kosar" => $kosar));

	}

	public function kosarba($azon){
		$cart = $this->session->userdata('CART');
		if(!$cart){
			$cart = Array();
		}
		$cart[] = $azon;
		$this->session->set_userdata('CART', $cart);

		redirect(base_url()."index.php/termekek");
	}

	public function kosarbol($index){
		$cart = $this->session->userdata('CART');
		if(!$cart){
			$cart = Array();
		}

		array_splice($cart,$index,1);

		$this->session->set_userdata('CART', $cart);

		redirect(base_url()."index.php/termekek/kosar");
	}
}
