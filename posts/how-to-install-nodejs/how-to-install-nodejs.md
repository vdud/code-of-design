---
title: How to Install Nodejs
description: Learn how to install Nodejs in different platforms
slug: how-to-install-nodejs
published: 2023-4-30
category: nodejs
series: false
---

# How to Install Nodejs

## Table of Contents

## Install Nodejs in specific platforms

### Install Nodejs in Ubuntu

Open the terminal and run the following commands:

```bash:terminal
sudo apt install nodejs
```

### Install Nodejs in Ubuntu using GUI

1. Open the Ubuntu Software Center
2. Search for nodejs
3. Click on Install
4. Restart your computer
5. Open the terminal and run the following command to check if nodejs is installed

```bash:terminal
node -v
```

### Install Nodejs in Windows

#### Install Nodejs using only terminal

Open the terminal and run the following commands:

1. first install chocolatey - a package manager for Windows

```bash:terminal
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

2. then install nodejs

```bash:terminal
choco install nodejs
```

#### Install Nodejs using GUI

1. Download the installer from [Nodejs](https://nodejs.org/en/download/)
2. Run the installer
3. Follow the steps in the installer
4. Restart your computer
5. Open the terminal and run the following command to check if nodejs is installed

```bash:terminal
node -v
```

### Install Nodejs in MacOS

#### Install Nodejs using only terminal

Open the terminal and run the following commands:

1. first install homebrew - a package manager for MacOS

```bash:terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. then install nodejs

```bash:terminal
brew install node
```

#### Install Nodejs using GUI

1. Download the installer from [Nodejs](https://nodejs.org/en/download/)
2. Run the installer
3. Follow the steps in the installer
4. Restart your computer
5. Open the terminal and run the following command to check if nodejs is installed

```bash:terminal
node -v
```
