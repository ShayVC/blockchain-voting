# 🗳️ Blockchain Voting System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js)
![Solidity](https://img.shields.io/badge/Solidity-0.8+-363636.svg?logo=solidity)
![Truffle](https://img.shields.io/badge/Truffle-5+-5E473B.svg?logo=truffle)
![Ganache](https://img.shields.io/badge/Ganache-Local%20Blockchain-F7931E.svg?logo=ethereum)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-47A248.svg?logo=mongodb)

---

## 🎯 Purpose
A **decentralized voting platform** designed to demonstrate the integration of blockchain technology into real-world applications. This system ensures **transparency, immutability, and trust** by storing votes on-chain while managing non-sensitive information off-chain.

---

## 📌 High-Level Goals & Scope
This project is a **course assignment** that demonstrates an **Ethereum-based voting application** with both **off-chain** and **on-chain** components.

✅ Voter registration (managed off-chain)  
✅ Candidate management (on-chain & off-chain)  
✅ Vote casting via Ethereum transactions  
✅ Real-time blockchain-based results  
✅ Modular architecture: **frontend, backend, smart contracts**

---

## 🗂️ Repository Structure
```bash
📁 blockchain-voting-system/
├── 📁 frontend/          # React-based voting interface
├── 📁 backend/           # Express.js API + MongoDB connection
├── 📁 smart-contracts/   # Solidity contracts for voting logic
├── 📁 .github/           # GitHub Actions workflows
├── 📄 README.md
└── 📄 package.json
```

---

## ⚙️ Local Setup & Initial Commits
### 📁 Clone the Repository
```bash
git clone https://github.com/ShayVC/blockchain-voting.git
cd blockchain-voting-system
```

### 🛠️ Install Dependencies
```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Smart Contracts
cd ../smart-contracts && npm install
```

### 🚀 Start Local Development Environment
```bash
# Run Ganache (local Ethereum blockchain)
ganache

# Compile & deploy smart contracts
truffle migrate

# Start backend server
cd backend && npm start

# Start frontend React app
cd ../frontend && npm start
```

---

## 🔗 Blockchain Architecture & Tech Stack
| Layer       | Tech Stack |
|-------------|------------|
| Frontend    | React, HTML, CSS, JS, MetaMask |
| Backend     | Node.js, Express.js, REST API |
| Blockchain  | Ethereum, Solidity, Truffle/Hardhat, Ganache |
| Database    | MongoDB / PostgreSQL (off-chain data only) |
| Dev Tools   | VS Code, GitHub Actions, Mocha/Chai, Git CLI |

---

## 🧱 Smart Contracts (Solidity)
✔️ Candidate registration  
✔️ Vote casting (1 per verified wallet)  
✔️ Real-time result tallying  
✔️ Event logging for frontend updates  

🔒 **Security Considerations**:
- Reentrancy protection
- Input validation (only registered voters can vote)
- Immutable storage (no deletions/overwrites)

---

## 🔙 Backend Integration (Node.js + Express)
The backend acts as a **middleware** between the frontend and the blockchain.

📌 Responsibilities:
- Manage voter registration
- Handle candidate metadata (off-chain)
- Provide admin/auth routes

### 🌐 API Endpoints
| Method | Endpoint              | Description |
|--------|-----------------------|-------------|
| POST   | `/registerVoter`      | Register a new voter |
| POST   | `/addCandidate`       | Admin adds a candidate |
| POST   | `/castVote`           | Cast a vote transaction |
| GET    | `/results`            | Fetch live results |
| GET    | `/candidates`         | List candidates |
| DELETE | `/removeCandidate/:id`| Remove candidate (admin only) |

---

## 🖥️ Frontend (React + MetaMask)
- 🔐 Wallet login (MetaMask)
- 🗳️ Cast vote via blockchain transaction
- 📊 View live election results
- 🎯 Connect seamlessly to backend & contracts

---

## 🗃️ Database Schema (ERD Overview)
Used for **off-chain metadata & management** (not storing votes).

| Table     | Fields |
|-----------|---------------------------------------------|
| User      | UserID, Name, Email, WalletAddress, Role |
| Candidate | CandidateID, Name, Position, Party |
| Vote      | VoteID, VoterID, CandidateID, Timestamp, TxHash |
| Election  | ElectionID, Title, StartDate, EndDate |

⚠️ **Note:** Votes are stored **only on-chain**. Off-chain DB is for metadata, user management, and audit logs.

---

## 🧪 Testing & CI/CD
✅ Smart contract tests (Mocha + Chai)  
✅ API tests (Postman / Jest)  
✅ GitHub Actions for:
- Linting
- Build verification
- Automated tests

---

## 📈 System Architecture Diagram
```sql
+-------------+       HTTP        +--------------+      Web3.js        +-----------------+
|  Frontend   |  <=============>  |   Backend    |  <=============>    | Smart Contracts |
|  (React.js) |                   | (Node.js API)|                     |  (Solidity)     |
+-------------+                   +--------------+                     +--------+--------+
      ↑                                 ↓                                      ↑
      |                          MongoDB / PostgreSQL                          |
      |                          (User & Metadata DB)                          |
      +------------------------------------------------------------------------+
```

---

## 🚧 GitHub Workflow & Collaboration
- 📁 Branches: `main`, `dev`, `feature/*`, `hotfix/*`
- 🐛 Issues: Report bugs / request features
- 📍 Milestones: Track progress
- ✅ Pull Requests (PRs): For all contributions

---

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 👥 Team & Acknowledgements
Built with ❤️ by students of **Cebu Institute of Technology - University**.

---

## 👥 The Developers

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/ShayVC">
        <img src="https://avatars.githubusercontent.com/ShayVC" width="100px;" alt="Shayne"/>
        <br />
        <sub><b>Shayne Marie B. Angus</b></sub>
      </a>
      <br />
      -
      <br/>
      <a href="https://github.com/ShayVC">🌐 GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/Howardness">
        <img src="https://avatars.githubusercontent.com/Howardness" width="100px;" alt="Mac"/>
        <br />
        <sub><b>Mac Howard Caranzo</b></sub>
      </a>
      <br />
      -
      <br/>
      <a href="https://github.com/Howardness">🌐 GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/FrancisGarryNillama">
        <img src="https://avatars.githubusercontent.com/FrancisGarryNillama" width="100px;" alt="Francis"/>
        <br />
        <sub><b>Francis Garry S. Nillama</b></sub>
      </a>
      <br />
      -
      <br/>
      <a href="https://github.com/FrancisGarryNillama">🌐 GitHub</a>
    </td>
    <td align="center">
      <a href="https://github.com/drN-n">
        <img src="https://avatars.githubusercontent.com/drN-n" width="100px;" alt="Aldrin"/>
        <br />
        <sub><b>Aldrin R. Mangubat</b></sub>
      </a>
      <br />
      -
      <br/>
      <a href="https://github.com/drN-n">🌐 GitHub</a>
    </td>
  </tr>
</table>

---

## 🏁 Future Improvements
🚀 Add zk-SNARKs (zero-knowledge privacy)  
🚀 Support multiple elections  
🚀 Use IPFS for immutable candidate data  
🚀 Add mobile wallet support  

