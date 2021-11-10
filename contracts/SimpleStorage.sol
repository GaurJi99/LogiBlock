// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.12;
pragma experimental ABIEncoderV2;

contract SimpleStorage {
  uint storedData;

  struct Item {
    uint pid;
    string pname;
    string pcatg;
    uint qty;
  }

  struct Auth{
    string id;
    string pass;
  }
  mapping(uint => Item) public idmap;
  uint [] public allitems;
  Item item;

  event itemadded(
    uint pid,
    string pname,
    string pcatg,
    uint qty
  );


  
  
  function readauth() pure public returns(Auth memory a) {
    Auth memory auth1;
    auth1 = Auth( "colonelsmart","kernel@123");
    return auth1;

  }
  function set( uint _pid,  string memory _pname, string memory _pcatg, uint _qty) public  {
    require(_pid > 0);
    require(bytes(_pname).length > 0);
    require(bytes(_pcatg).length > 0);
    require(_qty > 0);
    
    item = Item(_pid,_pname,_pcatg,_qty);
    idmap[_pid] = item;

    allitems.push(_pid);

    emit itemadded(_pid, _pname, _pcatg, _qty);
  }

  function get(uint proid) public view returns (string memory s) {
    for (uint i=0;i< allitems.length;i++){
      if ( proid == allitems[i]){
        Item memory curritem;
        curritem = idmap[proid];
        return curritem.pname;
      }
    }
  }
}
