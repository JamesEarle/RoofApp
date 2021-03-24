// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

/**
 * @title Simple
 * @dev Store & retrieve value in a variable
 */
contract Simple {
    
    // Variable to store and assign value to
    uint256 number;

    function set(uint256 _number) public {
        number = _number;
    }
    
    // No state change, can be "view"
    function get() public view returns (uint256 _value) {
        return number;
    }
}