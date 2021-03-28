// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.8.3;

// Represents an instance of a Tenant
contract Rental {

    struct Lease {
        uint256 id;
        address landlord;
        address tenant;
        uint256 durationInMonths;
        uint256 depositDue;
        uint256 monthlyRent;
    }

    // Landlord can have at most ten leases
    Lease activeLease;

    function createLease (address _tenant, uint256 _durationInMonths, uint256 _depositDue, uint256 _monthlyRent) public returns (address) {
        Lease memory _lease = Lease({
            id: 0,
            landlord: msg.sender,
            tenant: _tenant,
            durationInMonths: _durationInMonths,
            depositDue: _depositDue,
            monthlyRent: _monthlyRent
        });

        activeLease = _lease;

        // Return tenant address as confirmation
        return _tenant;
    }

    function getLease () public view returns (Lease memory) {
        return activeLease;
    }
}