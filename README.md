# NorAir Labs Documentation

Welcome to the NorAir Labs Documentation repository!
This project uses [Docusaurus](https://docusaurus.io/) to create and manage our documentation. Below, you will find instructions on how to set up the project, use Docusaurus, and contribute to our documentation.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version .x or later)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/norairlabs/docs-norairlabs-com.git
    cd docs-norairlabs-com
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Documentation Locally

To run the documentation site locally, use the following command:
    ```
    npm run start
    ```

This will start a local development server and open the documentation site in your default web browser. Any changes you make to the source files will be reflected live.

### Running the Documentation Remotely

To run the documentation site remotely, use the following command:
    ```
    npm run start -- --host 0.0.0.0
    ```

This will start a local development server and open the documentation site in your default web browser. Any changes you make to the source files will be reflected live.

### Building the Documentation

To build the static files for the documentation site, use the following command:
    ```
    npm run build
    ```

The build output will be located in the `build` directory. You can serve these files using any static file server.

## Writing Documentation

Documentation is stored in the `docs` directory. Each Markdown file represents a page on the documentation site. Here are some tips for writing good documentation:

- **Clear and Concise**: Write clear and concise explanations. Avoid unnecessary jargon.
- **Examples**: Provide examples to illustrate complex concepts.
- **Consistency**: Follow the existing style and structure of the documentation.


---

Thank you for contributing to NorairLabs Documentation!
