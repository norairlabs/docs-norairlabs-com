# NorAir Labs Documentation

Welcome to the NorAir Labs Documentation repository! This project uses [Docusaurus](https://docusaurus.io/) to create and manage our documentation. Below, you will find instructions on how to set up the project, use Docusaurus, and contribute to our documentation.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Yarn](https://yarnpkg.com/) (version 1.5 or later)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/norairlabs/docs-norairlabs-com.git
    cd docs-norairlabs-com
    ```

2. Install the dependencies:

    ```bash
    npm run install
    ```

### Running the Documentation Locally

To run the documentation site locally, use the following command:

    ```bash
    npm run start
    ```

This will start a local development server and open the documentation site in your default web browser. Any changes you make to the source files will be reflected live.


### Building the Documentation

To build the static files for the documentation site, use the following command:

    ```bash
    npm run build
    ```

The build output will be located in the `build` directory. You can serve these files using any static file server.

## Contributing

We welcome contributions to improve our documentation. Here's how you can help:

### Reporting Issues

If you find any issues or have suggestions for improvements, please open an issue in this repository.

### Submitting Changes

1. Fork the repository and create a new branch for your changes:

    ```bash
    git checkout -b my-feature-branch
    ```

2. Make your changes and commit them with a clear and concise commit message:

    ```bash
    git commit -m "Add detailed explanation for feature X"
    ```

3. Push your changes to your forked repository:

    ```bash
    git push origin my-feature-branch
    ```

4. Open a pull request against the main repository. Provide a detailed description of your changes and why they should be merged.


### Writing Documentation

Documentation is stored in the `docs` directory. Each Markdown file represents a page on the documentation site. Here are some tips for writing good documentation:

- **Clear and Concise**: Write clear and concise explanations. Avoid unnecessary jargon.
- **Examples**: Provide examples to illustrate complex concepts.
- **Consistency**: Follow the existing style and structure of the documentation.

### Using Docusaurus

Docusaurus makes it easy to create and manage documentation. Here are some key features:

- **Sidebar Navigation**: Define the structure of the sidebar in the `sidebars.js` file.
- **Markdown Features**: Use Markdown to write documentation. Docusaurus supports enhanced Markdown features, including code blocks, admonitions, and more.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for contributing to NorAir Labs Documentation!
