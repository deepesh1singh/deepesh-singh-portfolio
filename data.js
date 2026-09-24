const COURSEWORK = [
  "Programming and Data Structures*",
  "Algorithms*",
  "Systems Programming*",
  "Computer Networks*",
  "Database Management Systems*",
  "Operating Systems*",
  "Machine Learning",
  "Artificial Intelligence",
  "Scalable Data Mining",
  "Probability and Statistics",
  "Information Retrieval",
  "Deep Learning",
  "Statistical Learning",
  "NLP",
  "Note: Courses marked with * include both laboratory and theory components; courses without * are theory-only."
];

const SKILLS = [
  {
    group: "Languages & Databases",
    icon: "code",
    items: ["C", "C++", "Python", "JavaScript", "SQL (PostgreSQL)", "MongoDB", "HTML", "CSS", "Verilog", "MIPS32"],
  },
  {
    group: "Frameworks & Libraries",
    icon: "layers",
    items: ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "PyTorch", "Scikit-learn", "C++ STL", "Librosa", "FastAPI", "REST APIs", "Langchain", "LangGraph", "Transformers", "Node.js", "Express.js", "Django", "EJS"],
  },
  {
    group: "Tools & Technologies",
    icon: "tool",
    items: ["Linux", "GCC", "CI/CD", "Docker", "Git", "GitHub", "VS Code", "AWS", "Bash", "Lex", "Yacc"],
  },
  {
    group: "Core Competencies",
    icon: "target",
    items: ["DSA", "Competitive Programming", "Object-Oriented Programming", "System Programming", "SDLC", "System Design", "Machine Learning", "LLMs", "LLM Applications", "Software Development"],
  },
];

const INTERNSHIPS = [
  {
    org: "InternPE",
    role: "AI/ML Internship",
    period: "May 2026 – July 2026",
    image: "internpe-speech-emotion-recognition",
    link: "https://github.com/deepesh1singh/Speech-Emotion-Recognition-using-CNN-on-Cross-Cultural-Audio-Data",
    description:
      "Speech Emotion Recognition (Europe + India) is a TensorFlow-based CNN system that classifies speech into 9 emotion categories using audio data from European and Indian datasets. It uses Mel-spectrogram feature extraction, actor-aware and emotion-based data splitting, augmentation, mixed-precision training and test-time augmentation, achieving 86.52% test accuracy and a 0.89 macro F1-score on 653 test samples.",
    tags: ["TensorFlow", "CNN", "Audio ML"],
  },
  {
    org: "Amdocs Technologies",
    role: "Software Developer Intern",
    period: "Dec 2025 – Mar 2026",
    image: "Event-Management-System",
    link: "https://github.com/deepesh1singh/Event-Management-System",
    description:
      "Developed a full-stack event management system using Node.js, Express.js, MongoDB, and EJS with role-based access control for managers, vendors, accountants, and customers. Implemented event creation and management, ticket booking, payment processing, JWT-based authentication, bcrypt password hashing, PDF ticket generation using Puppeteer, email notifications with Nodemailer, and sales, revenue, and expenditure reporting.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
];


const PROJECTS = [
  {
    id: 1,
    title: "Cache-Aware Performance Optimization using gem5 and RISC-V",
    image: "cache-aware-performance-optimization-using-gem5-and-risc-v",
    link: "https://github.com/deepesh1singh/Cache-Aware-Performance-Optimization-using-gem5-and-RISC-V",
    category: "Development",
    description:
      "A computer architecture project that uses gem5 simulation to study how L1/L2 cache size and associativity affect program performance. Performs parameter sweeps and analyzes cache hit rates, execution time, and Pareto-optimal configurations, comparing simple vs. cache-aware chunked merge sort.",
    tags: ["gem5", "RISC-V", "C++"],
  },
  {
    id: 2,
    title: "Machine Learning in Cryptanalysis",
    image: "machine-learning-in-cryptanalysis",
    link: "https://github.com/deepesh1singh/ML-Cryptanalysis",
    category: "Data",
    description:
      "Applies machine learning and statistical pattern recognition to analyze and attack classical ciphers such as Caesar, Vigenère, and substitution ciphers. Generates encrypted datasets, extracts character-frequency and n-gram features, and trains Random Forest, SVM, and Neural Network models.",
    tags: ["Python", "Scikit-learn", "Cryptanalysis"],
  },
  {
    id: 3,
    title: "Resource Allocation and Deadlock Avoidance",
    image: "resource-allocation-and-deadlock-avoidance",
    link: "https://github.com/deepesh1singh/Resource-Allocation-and-Deadlock-Avoidance",
    category: "Development",
    description:
      "Simulates concurrent resource allocation among multiple threads and compares normal resource allocation with deadlock avoidance using the Banker's Algorithm. Uses POSIX threads, mutexes, condition variables, and barriers to coordinate resource requests and ensure safe allocation.",
    tags: ["C", "POSIX Threads", "OS"],
  },
  {
    id: 4,
    title: "Efficient Re-ranking with Cross-Encoders via Early Exit",
    image: "efficient-re-ranking-with-cross-encoders-via-early-exit",
    link: "https://github.com/deepesh1singh/cross-encoder-early-exit-reranking",
    category: "Data",
    description:
      "An information retrieval project that improves the efficiency of cross-encoder-based document re-ranking using early-exit techniques. Evaluates how stopping inference early and truncating ranked lists reduces computational cost while maintaining retrieval effectiveness.",
    tags: ["IR", "Transformers", "Python"],
  },
  {
    id: 5,
    title: "Review AI — Intelligent Resume Analyzer & Interview Prep System",
    image: "review-ai-intelligent-resume-analyzer-interview-prep-system",
    link: "https://github.com/deepesh1singh/AI-Powered-Resume-Analyzer-Interview-Prep-Platform",
    category: "Development",
    description:
      "A full-stack AI-powered application that analyzes a user's resume against a job description and generates a resume match score, skill-gap analysis, technical and behavioral interview questions, and a personalized preparation plan. Supports resume PDF generation and interview-report history.",
    tags: ["Full-Stack", "AI", "PDF Generation"],
  },
  {
    id: 6,
    title: "JobConnect Platform",
    image: "jobconnect-platform",
    link: "https://github.com/deepesh1singh/Job-Plateform",
    category: "Development",
    description:
      "A full-stack job recruitment platform connecting job seekers with employers. Candidates discover and apply for jobs, manage profiles, and track applications; recruiters post jobs, manage applications, and the hiring pipeline. Built with React, TypeScript, Node.js, Express, and MongoDB.",
    tags: ["React", "TypeScript", "MongoDB"],
  },
  {
    id: 7,
    title: "Limit Order Book Simulator",
    image: "limit-order-book-simulator",
    link: "https://github.com/deepesh1singh/Limit-Order-Book-Matching-Engine",
    category: "Quant",
    description:
      "A production-style C++20 matching engine simulating electronic exchange mechanics using strict price-time priority. Supports multiple order types, order lifecycle management, self-trade prevention, multithreaded order processing, historical replay, live statistics, and fuzz/sanitizer testing.",
    tags: ["C++20", "Market Microstructure", "Multithreading"],
  },
  {
    id: 8,
    title: "Customer Churn Prediction using XGBoost",
    image: "customer-churn-prediction-using-xgboost",
    link: "https://github.com/deepesh1singh/Bias-Variance-Model-",
    category: "Data",
    description:
      "A machine learning classification project predicting customer churn for a telecommunications company. Performs data preprocessing, categorical feature encoding, hyperparameter tuning with RandomizedSearchCV, and model evaluation using AUC, accuracy, precision, recall, and F1-score, achieving a 0.85 validation AUC.",
    tags: ["XGBoost", "Python", "Classification"],
  },
  {
    id: 9,
    title: "Differential Distinguishers for ASCON Permutation",
    image: "differential-distinguishers-for-ascon-permutation",
    link: "https://github.com/deepesh1singh/Differential-distinguishers-for-ASCON-permutation",
    category: "Data",
    description:
      "Investigates machine-learning-based cryptanalysis of the ASCON lightweight cryptographic permutation. Trains and compares LightGBM, CNN, and LSTM models to distinguish differential ciphertext pairs from random pairs across 1–5 rounds, achieving >99% test accuracy for 1–3 rounds.",
    tags: ["LightGBM", "CNN", "LSTM"],
  },
  {
    id: 10,
    title: "BankBrain Smoke Tests",
    image: "bankbrain-smoke-tests",
    link: "https://github.com/deepesh1singh/BankBrain-Cloud-Ready-Microservices-Banking-Backend",
    category: "Development",
    description:
      "An end-to-end testing framework for a cloud-ready, multi-agent banking backend. Validates integration across the Mock Bank API, MCP Server, Support Agent, and A2A Gateway using FastAPI TestClient and fully mocked in-memory network calls.",
    tags: ["FastAPI", "Microservices", "Testing"],
  },
  {
    id: 11,
    title: "Virtual Memory Simulation with Approximate LRU",
    image: "virtual-memory-simulation-with-approximate-lru",
    link: "https://github.com/deepesh1singh/Demand-Paging-Page-Replacement-Simulator",
    category: "Development",
    description:
      "A C-based virtual memory simulator modeling demand paging and page replacement across 128 concurrent processes. Implements page tables, shared physical frames, page-fault handling, and a 16-bit history-based Approximate LRU policy with a 4-tier frame selection strategy.",
    tags: ["C", "Memory Management", "OS"],
  },
  {
    id: 12,
    title: "Benchmark Datasets for Neuro-Symbolic Legal Reasoning",
    image: "construction-of-benchmark-datasets-for-neuro-symbolic-legal-reasoning",
    link: "https://github.com/deepesh1singh/Multi-Agent-Framework-with-Formalized-Knowledge-Representations-",
    category: "Data",
    description:
      "A research project converting statutory text into machine-interpretable benchmark datasets containing variables, grounded predicates, logical rules, supporting legal spans, and validation reports. Develops automated pipelines for the SARA and COLIEE legal datasets with structured JSON/Excel outputs.",
    tags: ["NLP", "Legal Tech", "Research"],
  },
  {
    id: 13,
    title: "Recursive File Finder",
    image: "recursive-file-finder",
    link: "https://github.com/deepesh1singh/Recursive-file-finder-by-extension-find-all-",
    category: "Development",
    description:
      "A POSIX C utility for recursive directory traversal and case-insensitive file-extension matching, reporting file ownership, size, and full paths for discovered files.",
    tags: ["C", "POSIX", "CLI"],
  },
  {
    id: 14,
    title: "Distributed Sudoku with Processes and Pipes",
    image: "distributed-sudoku-with-processes-and-pipes",
    link: "https://github.com/deepesh1singh/Distributed-Sudoku-with-Processes-and-Pipes",
    category: "Development",
    description:
      "A C-based interactive Sudoku system distributing the 9 board blocks across independent processes. Uses POSIX pipes for inter-process communication, with a coordinator process routing commands and synchronizing updates across block processes running in separate terminal windows.",
    tags: ["C", "IPC", "POSIX Pipes"],
  },
  {
    id: 15,
    title: "CPU Scheduling Simulation (FCFS and Round Robin)",
    image: "cpu-scheduling-simulation",
    link: "https://github.com/deepesh1singh/CPU-Scheduling-Simulation-FCFS-and-Round-Robin-",
    category: "Development",
    description:
      "A C-based event-driven simulator modeling process scheduling with CPU and I/O bursts. Implements FCFS and round robin scheduling with configurable time quanta, evaluating scheduling decisions and reporting per-process and aggregate performance metrics.",
    tags: ["C", "Scheduling", "OS"],
  },
  {
    id: 16,
    title: "Signal-Based Child Process Game",
    image: "signal-based-child-process-game",
    link: "https://github.com/deepesh1singh/Signal-Based-Child-Process-Game",
    category: "Development",
    description:
      "A C-based Linux process-management simulation modeling an elimination game using multiple child processes and Unix signals. Uses fork(), exec(), and SIGUSR1/SIGUSR2 for inter-process communication, with the parent coordinating execution, ball passing, and elimination logic.",
    tags: ["C", "Signals", "Linux"],
  },
  {
    id: 17,
    title: "Dependency-Based Rebuild Simulator",
    image: "dependency-based-rebuild-simulator",
    link: "https://github.com/deepesh1singh/Dependency-Based-Rebuild-Simulator",
    category: "Development",
    description:
      "A C-based build-system simulator modeling dependency-driven module rebuilding using process creation and synchronization. Generates dependency graphs and recursively rebuilds modules using fork(), exec(), and waitpid(), with file-based state tracking.",
    tags: ["C", "Build Systems", "Process Sync"],
  },
  {
    id: 18,
    title: "High-Performance Cache Optimization and Memory Analysis",
    image: "high-performance-cache-optimization-and-memory-analysis",
    link: "https://github.com/deepesh1singh/High-Performance-Cache-Optimization-and-Memory-Analysis",
    category: "Development",
    description:
      "A systems performance project evaluating cache optimization techniques and memory hierarchy behavior using C, Linux perf, Python, and CACTI. Analyzes loop interchange and cache blocking performance, studying cache access time and read energy across cache sizes and associativities.",
    tags: ["C", "perf", "CACTI"],
  },
  {
    id: 19,
    title: "AI Job Assistant",
    image: "ai-job-assistant",
    link: "https://github.com/deepesh1singh/AI-Job-Assistant",
    category: "Development",
    description:
      "A full-stack AI-powered job analysis platform using Sentence Transformers (MPNet) to semantically match job descriptions with resumes. Identifies matched and missing skills, generates resume insights and cover letters, tracks applications, via a cross-browser extension for LinkedIn, Indeed, Naukri, and Glassdoor.",
    tags: ["Sentence Transformers", "Browser Extension", "Full-Stack"],
  },
  {
    id: 20,
    title: "KTP KSocket",
    image: "ktp-ksocket",
    link: "https://github.com/deepesh1singh/Custom-Network-Transport-Protocol-with-Sliding-Window-over-UDP",
    category: "Development",
    description:
      "A reliable transport protocol implemented over UDP in C, providing a socket-like API with sliding-window flow control, ACK-based reliability, timeout retransmissions, and out-of-order packet handling. Uses System V shared memory and POSIX threads for reliable file transfer under simulated packet loss.",
    tags: ["C", "UDP", "Networking"],
  },
  {
    id: 21,
    title: "High-Performance Financial Data Processing",
    image: "high-performance-cache-optimization-and-memory-analysis",
    link: "https://github.com/deepesh1singh/High-Performance-Financial-Data-Processing",
    category: "Quant",
    description:
      "A benchmark comparing Pure Python, NumPy, Polars, and C++ for processing millions of financial market records. Evaluates as-of joins and trading analytics across datasets up to 5M trades. The C++ implementation achieved 15.5× lower execution time and 3.7× lower memory usage than pure Python at 2M trades.",
    tags: ["C++", "Polars", "Market Data"],
  },
  {
    id: 22,
    title: "TCP File Encryption Client-Server",
    image: "tcp-file-encryption-client-server",
    link: "https://github.com/deepesh1singh/TCP-File-Encryption-Client-Server",
    category: "Development",
    description:
      "A C-based client-server application transferring text files over TCP with server-side monoalphabetic substitution encryption. Implements socket-based communication, chunked file transfer, encryption-key validation, and application-level message termination, with Wireshark traffic inspection.",
    tags: ["C", "TCP", "Encryption"],
  },
  {
    id: 23,
    title: "TaskQueue Server-Worker",
    image: "tcp-file-encryption-client-server",
    link: "https://github.com/deepesh1singh/TaskQueue-Server-Worker",
    category: "Development",
    description:
      "A C-based TCP task queue system distributing arithmetic tasks from a central server to multiple worker clients. Supports concurrent worker connections, task assignment and result submission, queue management, and task recovery when a worker disconnects mid-task.",
    tags: ["C", "TCP", "Distributed Systems"],
  },
  {
    id: 24,
    title: "MiniSMTP",
    image: "minismtp",
    link: "https://github.com/deepesh1singh/MiniSMTP",
    category: "Development",
    description:
      "A C-based SMTP-like mail client-server system built using TCP sockets. Implements mail commands such as HELO, MAIL FROM, RCPT TO, and DATA, supports per-user mailbox storage and email retrieval, and handles multiple concurrent clients using POSIX threads.",
    tags: ["C", "SMTP", "Sockets"],
  },
  {
    id: 25,
    title: "CLDP Raw Discovery",
    image: "cldp-raw-discovery",
    link: "https://github.com/deepesh1singh/CLDP-Raw-Discovery",
    category: "Development",
    description:
      "A C-based custom network discovery protocol implemented directly over IPv4 raw sockets using experimental IP protocol number 253. Defines custom HELLO, QUERY, and RESPONSE messages, handling packet construction and parsing at the IP layer over local-network broadcast.",
    tags: ["C", "Raw Sockets", "Protocol Design"],
  },
  {
    id: 26,
    title: "Hybrid CNN-LSTM Differential Distinguisher",
    image: "hybrid-cnn-lstm-differential-distinguisher",
    link: "https://github.com/deepesh1singh/Hybrid-CNN-LSTM-differential-distinguisher-for-ASCON-ACE-SIMECK-LLBC-and-future-ciphers",
    category: "Data",
    description:
      "Developed and evaluated eight neural architectures for differential cryptanalysis of the ASCON permutation. Designed a hybrid CNN–LSTM distinguisher reaching 6 rounds for ASCON, ACE, and FUTURE, 19 rounds for Simeck, extending prior attack depth from 4 to 6 rounds (ASCON) and 12 to 19 rounds (Simeck).",
    tags: ["CNN", "LSTM", "Cryptanalysis"],
  },
  {
    id: 27,
    title: "Boating Simulation with Threads and Synchronization",
    image: "boating-simulation-with-threads-and-synchronization",
    link: "https://github.com/deepesh1singh/Boating-Simulation-with-Threads-and-Synchronization",
    category: "Development",
    description:
      "A C-based boating center simulation using POSIX threads and synchronization primitives to model concurrent boat and visitor activities. Implements synchronized visitor-to-boat assignment, randomized sightseeing and ride durations, and controlled concurrent execution across multiple boats and visitors.",
    tags: ["C", "pthreads", "Concurrency"],
  },
  {
    id: 28,
    title: "Restaurant Simulation (Processes, Shared Memory, Semaphores)",
    image: "restaurant-simulation",
    link: "https://github.com/deepesh1singh/Restaurant-Simulation-Processes-Shared-Memory-Semaphores-",
    category: "Development",
    description:
      "A C-based restaurant simulation using multiple processes and System V IPC to model concurrent customers, waiters, and cooks. Implements shared memory for global simulation state and semaphores for synchronization, including limited table capacity, order processing, and closing-time behavior.",
    tags: ["C", "IPC", "Semaphores"],
  },
  {
    id: 29,
    title: "Leader and Followers Using Shared Memory",
    image: "leader-and-followers-using-shared-memory",
    link: "https://github.com/deepesh1singh/Leader-and-Followers-Using-Shared-Memory",
    category: "Development",
    description:
      "A C++17 leader-follower coordination system using multiple processes and System V shared memory for inter-process communication. Implements turn-by-turn synchronization, shared-state coordination, iterative number generation and sum computation, and termination on duplicate-sum detection.",
    tags: ["C++17", "Shared Memory", "IPC"],
  },
  {
    id: 30,
    title: "Demand Paging Simulator (Binary Search + Swapping)",
    image: "demand-paging-simulator",
    link: "https://github.com/deepesh1singh/Demand-Paging-Simulator-Binary-Search-Swapping-",
    category: "Development",
    description:
      "A C-based demand paging simulator modeling memory management for multiple concurrent processes performing binary searches on paged data. Implements page-fault handling, frame allocation, process-level swapping, and restoration of swapped processes under constrained physical memory.",
    tags: ["C", "Paging", "Memory Management"],
  },
  {
    id: 31,
    title: "Virtual Memory Simulation with LRU-Style Replacement",
    image: "virtual-memory-simulation-with-lru-style-replacement",
    link: "https://github.com/deepesh1singh/Virtual-Memory-Simulation-with-LRU-Style-Replacement",
    category: "Development",
    description:
      "A C-based virtual memory simulator modeling demand paging for multiple processes performing binary searches over large logical arrays. Implements page-fault handling, fixed-frame memory allocation, LRU-style page replacement, and frame acquisition classification.",
    tags: ["C", "LRU", "Virtual Memory"],
  },
  {
    id: 32,
    title: "Multimedia Database System",
    image: "multimedia-database-system",
    link: "https://github.com/deepesh1singh/multimedia-database-system",
    category: "Development",
    description:
      "A full-stack multimedia database system using Node.js, Express.js, Sequelize, and SQLite for managing books, videos, music, images, and articles. Implements JWT authentication, secure file uploads, advanced search, playlists, real-time notifications with Socket.IO, and an admin analytics dashboard.",
    tags: ["Node.js", "Sequelize", "Socket.IO"],
  },
  {
    id: 33,
    title: "Gram Panchayat Management System",
    image: "gram-panchayat-management-system",
    link: "https://github.com/deepesh1singh/GRAM-PANCHAYAT-MANAGEMNT-SYSTEM",
    category: "Development",
    description:
      "A PHP-based Gram Panchayat Management System for digitizing citizen services and administrative workflows. Implements role-based dashboards for administrators, employees, monitors, and citizens, with complaint management, citizen data entry, data querying, and administrative monitoring.",
    tags: ["PHP", "MySQL", "Civic Tech"],
  },
  {
    id: 34,
    title: "Approximate Nearest Neighbor Search with LSH and HNSW",
    image: "approximate-nearest-neighbor-search-with-lsh-and-hnsw",
    link: "https://github.com/deepesh1singh/Approximate-Nearest-Neighbor-Search-Implementation-with-LSH-and-HNSW",
    category: "Data",
    description:
      "Implemented and evaluated Approximate Nearest Neighbor search using Locality-Sensitive Hashing (LSH) and Hierarchical Navigable Small World (HNSW) graphs in Python. Compared approaches using Recall@5/10/15 and query latency, generating recall-versus-time performance benchmarks.",
    tags: ["Python", "ANN", "Information Retrieval"],
  },
  {
    id: 35,
    title: "Machine Learning Model Comparison using PyTorch and Spark",
    image: "machine-learning-model-comparison-using-pytorch-and-spark",
    link: "https://github.com/deepesh1singh/Machine-Learning-Model-Comparison-using-PyTorch-and-Spark",
    category: "Data",
    description:
      "Implemented and compared machine learning models using PyTorch and Apache Spark, evaluating model behavior across configurations and activation functions. Analyzed performance using Mean Squared Error (MSE) and developed reproducible Jupyter Notebook implementations for both frameworks.",
    tags: ["PyTorch", "Apache Spark", "MSE"],
  },
  {
    id: 36,
    title: "Large-Scale Multi-Label Text Classification with PyTorch",
    image: "large-scale-multi-label-text-classification-with-pytorch",
    link: "https://github.com/deepesh1singh/Large-Scale-Multi-Label-Text-Classification-with-PyTorch",
    category: "Data",
    description:
      "A large-scale multi-label text classification system in PyTorch using the Amazon-670K dataset with 135,909-dimensional TF-IDF features and 670,091 possible labels. Designed a sparse low-rank classifier with rank-128 projection, comparing SGD, SGD+Momentum/Nesterov, and Adadelta optimizers.",
    tags: ["PyTorch", "Text Classification", "Optimization"],
  },
  {
    id: 37,
    title: "UDP Word-by-Word File Transfer (Client-Server)",
    image: "udp-word-by-word-file-transfer",
    link: "https://github.com/deepesh1singh/UDP-Word-by-Word-File-Transfer-Client-Server-",
    category: "Development",
    description:
      "A C-based client-server file transfer system using UDP and POSIX socket APIs to transmit text files line by line through a custom application-layer protocol. Implements filename requests, sequential WORD-based data requests, file-not-found handling, and HELLO/FINISH control messages.",
    tags: ["C", "UDP", "Sockets"],
  },
];

const CODING_PROFILES = [
  {
    name: "Codeforces",
    handle: "Deepesh_singh",
    detail: "Expert · 1654 rating",
    link: "https://codeforces.com/profile/Deepesh_singh",
    icon: "codeforces",
  },
  {
    name: "GitHub",
    handle: "deepesh1singh",
    detail: "37+ public repositories",
    link: "https://github.com/deepesh1singh",
    icon: "github",
  },
];

const ACHIEVEMENTS = [
  "Secured All India Category Rank 16 in JEE Advanced.",
  "Achieved Expert rating (1654) on Codeforces competitive programming platform.",
  "Ranked 27th out of 27,876 participants in Codeforces Round 1043 (Div. 3).",
  "Ranked 495th out of 48,643 participants in Codeforces Round 1042 (Div. 3).",
  "AWS Badge on Machine Learning Foundations — Amazon Web Services Educate.",
  "Cleared the Quantitative Finance (Quadeye) Market Data Prediction Challenge on Kaggle.",
  "Participated in the Jane Street Algorithmic Trading Competition, focused on quantitative strategies and problem-solving.",
  "Participated in the Pan-IIT AI and ML Hackathon, focused on developing AI/ML solutions to real-world problems.",
];

const CONTACT = [
  { label: "Gmail", value: "deepesh002singh@gmail.com", link: "mailto:deepesh002singh@gmail.com", icon: "mail" },
  { label: "LinkedIn", value: "deepesh-singh-05846b240", link: "https://www.linkedin.com/in/deepesh-singh-05846b240/", icon: "linkedin" },
  { label: "X", value: "@deepesh_ssingh", link: "https://x.com/deepesh_ssingh", icon: "x" },
  { label: "Instagram", value: "@deepesh.ssingh", link: "https://instagram.com/deepesh.ssingh", icon: "instagram" },
  { label: "Threads", value: "@deepesh.ssingh", link: "https://threads.net/@deepesh.ssingh", icon: "threads" },
];
