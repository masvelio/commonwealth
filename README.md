<h1 align="center">
  <br>
  <img width="100" src="https://commonwealth.im/static/brand_assets/512x512.svg"/>
  <br>
  Commonwealth Challenge
  <br>
</h1>

<h4 align="center">NFT at your fingertips</h4>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-develop">How To Develop</a> •
  <a href="#how-to-deploy">How To Deploy</a> •
  <a href="#things-to-work-on-next">Things to work on next</a> •
  <a href="#gallery">Gallery</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/masvelio/masvelio/main/Screenshot%202022-11-16%20at%2013.45.21.png)

## Overview

This project is a challenge I got from Commonwealth company to be able to apply for Senior Front End role. In couple hours I have created small full stack app which gives the opportunity to look for the data related to NFT collections.

## Tech stack

- React - UI Library
- Tailwind - CSS
- React Query - fetching data from the server
- Express - backend framework
- Railway - deployment & hosting

## How to use

- App is available at [commonwealth-challenge.up.railway.app](https://commonwealth-challenge.up.railway.app/).
- In NFT Balance page it is possible to type the address that holds tokens
- It is possible to click on the NFT to see more details of the token
- There is a backend validation that checks if the address is correct
- Example of addresses:
  - `mitchputnam.eth`
  - `0x144dE0f3E816a12240A6f5f84a4D0d02A29137E6`
  - `levin.eth`
  - `davnev.eth`

## How to develop

The app consists of two modules, `client` for frontend and `api` for backend. Each module has to be fired separately. 

```bash
# Go into the client directory 
$ cd client

# Install dependencies
$ yarn

# Run the app on port 3000
$ yarn dev

```

```bash
# Go into the api directory 
$ cd api

# Install dependencies
$ yarn

# Run the app on port 8000
$ yarn dev

```
Make sure that Environment Variables are set properly to be able to communicate frontend and backend. Look for `.env.example` files in both directories.

## How to deploy
For now, every push on the master branch triggers the build and deployment in Railway dashboard. After ~2 minutes after the push, the changes should be visible on the production.

## Things to work on next
- Introduce dynamic routes for each route in the application
- Add pagination to the list of NFTs (now it is capped to max 50 items)
- Add better image loader mechanism
- Write some unit or E2E tests
- Add more info in details NFT view
- Support other types than images as NFTs (video, gif)

## Gallery

NFT Balance Route
![screenshot](https://raw.githubusercontent.com/masvelio/masvelio/main/Screenshot%202022-11-16%20at%2013.45.26.png)
List of NFTs
![screenshot](https://raw.githubusercontent.com/masvelio/masvelio/main/Screenshot%202022-11-16%20at%2013.45.54.png)
Details of the particular NFT
![screenshot](https://raw.githubusercontent.com/masvelio/masvelio/main/Screenshot%202022-11-16%20at%2013.46.04.png)

## License

MIT
