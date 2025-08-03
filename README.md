| Sonarcloud status: | Hexlet tests and linter status: |
|--------------------|---------------------------------|
| [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Glazoff_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Glazoff_frontend-project-44) | [![Actions Status](https://github.com/Glazoff/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Glazoff/frontend-project-44/actions) |



### Game Demos (asciinema):
- [brain-even](https://asciinema.org/a/317X1dEzkcIhyhOrrPNqGpcDu)
- [brain-calc](https://asciinema.org/a/v8ZXrYt82Wa8iAo7nl88rcRF7)
- [brain-gcd](https://asciinema.org/a/OqTQjGzP0ibkfRl0IaTGkp0f5)
- [brain-progression](https://asciinema.org/a/4V6Qs5lwnk0OnmNvSkhP0c7wv)
- [brain-prime](https://asciinema.org/a/EIMuzn6dtkInjrSn1bFrBmxvd)

### Development
- Run ESLint (static code analysis):
  ```bash   
  make lint
  ```
- Publish package to npm:
  ```bash   
  make publish
  ```
- Install dependencies:
  ```bash   
  make install
  ```

### Usage
1. Clone the repository:
    ```bash
    git clone https://github.com/Glazoff/frontend-project-44
    cd frontend-project-44
    ```
2. Install dependencies:
    ```bash
    make install
    ```
3. Link local npm package:
    ```bash
    npm link
    ```
4. Run each brain game individually (run each command separately in your terminal): 
   ```bash
    brain-even
    brain-calc
    brain-gcd
    brain-progression
    brain-prime
   ```