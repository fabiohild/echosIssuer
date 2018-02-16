contractAddress = "0x73A3d58d5fD438E8Ce33d2d0ee1DFbd417878d97";
contractAbi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
			}
		],
    "name": "certificates",
    "outputs": [
      {
        "name": "",
        "type": "bool"
			}
		],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
	},
  {
    "constant": true,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
			},
      {
        "name": "_transaction",
        "type": "uint8"
			}
		],
    "name": "hasAccess",
    "outputs": [
      {
        "name": "",
        "type": "bool"
			}
		],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
	},
  {
    "constant": true,
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "name": "",
        "type": "bool"
			}
		],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "user",
        "type": "address"
			},
      {
        "indexed": false,
        "name": "access",
        "type": "uint8"
			}
		],
    "name": "accessGranted",
    "type": "event"
	},
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokenContract",
        "type": "address"
			}
		],
    "name": "withdrawTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
			},
      {
        "name": "_transaction",
        "type": "uint8"
			}
		],
    "name": "grantAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [
      {
        "name": "_user",
        "type": "address"
			},
      {
        "name": "_transaction",
        "type": "uint8"
			}
		],
    "name": "revokeAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [
      {
        "name": "_certificateAddress",
        "type": "bytes32"
			}
		],
    "name": "invalidateCertificate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "contractAddress",
        "type": "bytes32"
			},
      {
        "indexed": false,
        "name": "_name",
        "type": "string"
			},
      {
        "indexed": false,
        "name": "email",
        "type": "string"
			},
      {
        "indexed": false,
        "name": "_course",
        "type": "string"
			},
      {
        "indexed": false,
        "name": "_dates",
        "type": "string"
			},
      {
        "indexed": false,
        "name": "_hours",
        "type": "uint16"
			}
		],
    "name": "logPrintedCertificate",
    "type": "event"
	},
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawBalance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	},
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
			},
      {
        "name": "_email",
        "type": "string"
			},
      {
        "name": "_course",
        "type": "string"
			},
      {
        "name": "_hours",
        "type": "uint16"
			},
      {
        "name": "_dates",
        "type": "string"
			}
		],
    "name": "printCertificate",
    "outputs": [
      {
        "name": "_certificateAddress",
        "type": "bytes32"
			}
		],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
	}
]
