<?php
/**
 * DatabaseAPI class
 */
class DatabaseAPI {

	private $db;

	/**
	 * Initialize
	 */
	public function __construct(){
		$connect = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
	}

	/**
	 * Create user in database
	 */
	public function insertUser($openid){
		$user = $this->findUserByOpenid($openid);
		if ($user) {
			return $user;
		}
		$sql = "INSERT INTO `coach_newyear_info` SET `openid` = ?, lottery = 0";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $openid);
		if ($res->execute()) {
			return $this->findUserByOpenid($openid);
		} else {
			return FALSE;
		}
	}

	public function regUser($openid, $nickname, $headimgurl) {
		if ($this->findUserByOauth($openid)) {
			return TRUE;
		}
		$sql = "INSERT INTO `coach_newyear_oauth` SET `openid` = ?, nickname = ?, basename = ?, headimgurl = ?";
		$res = $this->db->prepare($sql); 
		$basename = json_encode(array('name' => $nickname));
		$res->bind_param("ssss", $openid, $nickname, $basename, $headimgurl);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	/**
	 * Create user in database
	 */
	public function findUserByOauth($openid){
		$sql = "SELECT id  FROM `coach_newyear_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid);
		if($res->fetch()) {
			return TRUE;
		}
		return FALSE;
	}

	/**
	 * Create user in database
	 */
	public function findUserByOpenid($openid){
		if (isset($_SESSION['user'])) {
			return $_SESSION['user'];
		}
		$sql = "SELECT id, openid, lottery FROM `coach_newyear_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid, $openid, $lottery);
		if($res->fetch()) {
			$user = new stdClass();
			$user->uid = $uid;
			$user->openid = $openid;
			$user->lottery = $lottery;
			$user->status = 1;
			$_SESSION['user'] = $user;
			return $user;
		}
		return NULL;
	}

	/**
	 * load prize record
	 */
	public function loadLotteryList(){
		$sql="SELECT nickname FROM  `coach_newyear_oauth` a, `coach_newyear_info` b where b.openid = a.openid and b.lottery=1";
		$res = $this->db->query($sql);
		$data = array();
		while($row = $res->fetch_array(MYSQLI_ASSOC))
		{
			$data[] = $row;
		}
		return $data;
		
	}

	/**
	 * finish user info
	 */
	public function finishInfo($name, $mobile, $uid){
		$sql="INSERT INTO `coach_newyear_list` SET `name` = ?, `mobile` = ?, uid = ?";
		$this->db->query('set names utf8');
		$res = $this->db->prepare($sql);
		$res->bind_param("sss", $name, $mobile, $uid);
		if($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
		
	}

	/**
	 * Add prize record
	 */
	public function setSaveImg($uid, $image) {
		$sql = "INSERT INTO `coach_newyear_image` SET `image` = ?, uid = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ss", $image, $uid);
		if($res->execute()) {
			$sql = "SELECT id FROM `coach_newyear_image` WHERE `image` = ?"; 
			$res = $this->db->prepare($sql);
			$res->bind_param("s", $image);
			$res->execute();
			$res->bind_result($id);
			if($res->fetch()) {
				return $id;
			}
			return FALSE;
		}
		return FALSE;
	}

	public function findImageById($id){
		$sql = "SELECT id,image,uid FROM `coach_newyear_image` WHERE `id` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $id);
		$res->execute();
		$res->bind_result($id, $image, $uid);
		if($res->fetch()) {
			$data = new stdClass();
			$data->id = $id;
			$data->image = $image;
			$data->uid = $uid;
			return $data;
		}
		return NULL;
	}

	/**
	 * check prize record
	 */
	public function totalcount(){
		$sql = "SELECT count(*) FROM `coach_newyear_info` WHERE `lottery` = 1"; 
		$res = $this->db->prepare($sql);
		$res->execute();
		$res->bind_result($num);
		if($res->fetch()) {
			return $num;
		}
		return 0;
	}




}
