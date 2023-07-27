<a name="readme-top"></a>

[![Contributors](https://img.shields.io/github/contributors/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/graphs/contributors)
[![LastUpdate](https://img.shields.io/github/last-commit/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/commits/dev)
[![Stargazers](https://img.shields.io/github/stars/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/stargazers)
[![Issues](https://img.shields.io/github/issues/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/issues)
[![License](https://img.shields.io/github/license/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/blob/main/LICENSE)
[![GitHub pull-requests merged](https://badgen.net/github/merged-prs/IndieCoderMM/snippit-ui)](https://github.com/IndieCoderMM/snippit-ui/pulls?q=is%3Amerged)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

<details>
<summary>Table of Contents</summary>

- [💻 About Snippit](#-about-snippit)
  - [🧰 Tech Stack](#-tech-stack)
  - [📘 Getting Started](#-getting-started)
    - [📋 Prerequisites](#-prerequisites)
    - [📥 Installation](#-installation)
    - [⚙ Configuration](#-configuration)
    - [💻 Usage](#-usage)
  - [📂 Project Structure](#-project-structure)
  - [🤝 Contributing](#-contributing)
  - [👨‍🚀 Authors](#-authors)
  - [💖 Show Your Support](#-show-your-support)
  - [📜 License](#-license)
</details>

# 💻 About Snippit

`Community-driven code-sharing platform`

> This is the front-end codebase for Snippit. The back-end repository can be found at [PrantoshB/Snippit](https://github.com/PrantoshB/Snippit).


**Snippit** is an open-source code sharing website that allows developers to share code snippets, receive feedback, and collaborate with others. It aims to provide a platform for the community to learn, inspire, and improve their coding skills.

<img src="https://via.placeholder.com/468x300?text=App+Screenshot+Here" width=468 height=300 alt="screenshot" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🧰 Tech Stack

- **React**
- **Redux Toolkit**
- **TypeScript**
- **Tailwind CSS**
- **Vite**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📘 Getting Started

To run this project locally, follow these steps.

### 📋 Prerequisites

Make sure you have the following installed on your machine:
- [Node.js v20.2 or higher](https://nodejs.org/en)
- [NPM v9.6.6 or higher](https://rubyonrails.org/)
- [Backend Server](https://github.com/PrantoshB/Snippit): Make sure you have the backend repository for this project **set up and running before proceeding with the frontend setup**.

### 📥 Installation

1. Clone this repository to your project folder.

```sh
cd my-project
git clone git@github.com:IndieCoderMM/snippit-ui.git .
```

2. Install the dependencies:

```sh
npm install
```

### ⚙ Configuration

Create a `.env.local` file in the root directory and add your API endpoint URL:

```sh
VITE_API_URL=http://localhost:3000/api/v1
```

### 💻 Usage

To run the project, execute the following command:

```sh
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📂 Project Structure

This is an overview of the `./src` directory.

```sh
.
├── app/
│   ├── App.tsx
│   └── store.ts
├── assets
├── common/
│   ├── components
│   ├── services
│   └── constants
├── features/
│   ├── snippets/
│   │   ├── SnippetCard.tsx
│   │   └── snippetsSlice.ts
│   └── contributors
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── index.css
└── main.tsx
```

- `app/`: App-wide setup and layout
- `common/`: Shared code and resources
  - `components/`: Reusable components across different pages
  - `services/`: Interacting with the backend API
- `features/`: Feature-specific folders
  - `snippets/`: Components and functions related to snippets
- `pages/`: Main pages of the app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing

We welcome contributions from the community! 

If you'd like to contribute to the project, please follow the guidelines outlined in [CONTRIBUTING.md](./CONTRIBUTING.md). We appreciate your help!

If you encounter any issues, have feature requests, or want to report a bug, please open an issue on the [Issues](https://github.com/IndieCoderMM/snippit-ui/issues) page. We'll do our best to address them.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👨‍🚀 Authors

We are always looking for ways to improve this project. If you have any suggestions or ideas, we would love to hear from you.

| Name | Connect |
| --- | :---: |
| **Prantosh Biswas** | [![Github](https://img.shields.io/badge/GitHub-673AB7?logo=github&logoColor=white)](https://github.com/PrantoshB) [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://linkedin.com/in/prantosh) [![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](mailto:pbiswas1007@gmail.com) | 
| **Hein Thant** | [![Github](https://img.shields.io/badge/GitHub-673AB7?logo=github&logoColor=white)](https://github.com/IndieCoderMM) [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://linkedin.com/in/hthantoo) [![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](mailto:hthant00chk@gmail.com) |


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💖 Show Your Support

If you find this project useful or interesting, please consider giving it a star ⭐️. 
It helps us gain visibility and encourages us to continue improving and adding new features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📜 License 

This project is licensed under the [MIT License](./LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
