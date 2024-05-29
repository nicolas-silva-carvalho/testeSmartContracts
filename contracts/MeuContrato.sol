pragma solidity ^0.8.24;
import "hardhat/console.sol";

contract MeuContrato {
    string private message;

    constructor(string memory firstMessage) {
        console.log("Mensagem de entrada recebida: ", firstMessage);
        message = firstMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        console.log(
            "Nova mensagem recebida de '%s' para '%s'",
            message,
            newMessage
        );
        message = newMessage;
    }
}