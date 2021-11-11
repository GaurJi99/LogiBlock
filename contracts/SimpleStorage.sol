// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.12;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
  uint storedData;

  struct Item {
    uint pid;
    string pname;
    uint qty;
  }

  struct Auth{
    string id;
    string pass;
  }


  mapping(uint => Item) public idmap;

  uint [] public allitems;

  string [] public allcat;
  Item item;


  event itemadded(
    uint pid,
    string pname,
    uint qty
  );

  mapping(uint => string) public pid_to_cat;


  function addcategory(string memory _cat) public {
    require(bytes(_cat).length > 0);
    allcat.push(_cat);
  }

  function fetchallcat() public view returns(string[] memory ) {

    return allcat;

  }

  function readauth() pure public returns(Auth memory a) {
    Auth memory auth1;
    auth1 = Auth( "colonelsmart","kernel@123");
    return auth1;

  }

  function set( uint _pid,  string memory _pname, uint _qty, string memory _catg) public  {
    require(_pid > 0);
    require(bytes(_pname).length > 0);
    require(_qty > 0);

    item = Item(_pid,_pname,_qty);
    allitems.push(_pid);
    idmap[_pid] = item;
    pid_to_cat[_pid] = _catg;

    emit itemadded(_pid, _pname, _qty);
  }

  function get(uint proid) public view returns (string memory categoryofpid,string memory pnameofpid) {
    for (uint i=0;i< allitems.length;i++){
      if ( proid == allitems[i]){
        Item memory curritem;
        curritem = idmap[proid];
        string memory mapres;
        mapres = pid_to_cat[proid];
        return (mapres,curritem.pname);
      }
    }
  }
}
