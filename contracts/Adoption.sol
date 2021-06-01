// SPDX-License-Identifier: MIT
pragma solidity 0.6.4;

contract Adoption {
    address[16] public adopters;

    // Adopting a pet
    function adopt(uint256 petId) public returns (uint256) {
        require(petId >= 0 && petId <= 15, 'Err: pet id out of range');
        adopters[petId] = msg.sender;
        return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}
