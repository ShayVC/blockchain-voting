# 🗳️ Blockchain Voting System

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

## 🏁 Future Improvements
🚀 Add zk-SNARKs (zero-knowledge privacy)  
🚀 Support multiple elections  
🚀 Use IPFS for immutable candidate data  
🚀 Add mobile wallet support  
