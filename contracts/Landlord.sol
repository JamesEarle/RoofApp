// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.8.3;

// Represents an instance of a Tenant
contract Landlord {
    uint256 balance;
    address[] tenantAddresses;

    struct Lease {
        address tenant;
        uint256 deposit;
        uint256 rentPrice;
        uint256 rentReccurrence;
        // ...
    }
}