// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.8.3;

// Represents an instance of a Tenant
contract Tenant {
    uint256 balance;
    uint256 deposit;
    address tenantAddress;
    bool depositSent;

    function getBalance() public view returns (uint256) {
        return balance;
    }

    // function giveDeposit(uint256 _deposit, address _landlord) public {
    //     require(msg.sender == tenantAddress);
    // * pay deposit to landlord *  
    // }
}