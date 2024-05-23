# Recursive Partitioning Layout Builder

## Description
This React application is a responsive layout builder that allows users to create and manage partitions within a page. Each partition can be split either vertically or horizontally, and new partitions can be assigned random colors. Partitions are resizable and can be removed as needed. The application provides a flexible interface for dynamically creating complex layouts through recursive partitioning.

## Features
- Initial Partitioning: Display an initial partition with "V" (Vertical split) and "H" (Horizontal split) buttons.
- Vertical and Horizontal Splitting: Clicking the "V" button splits a partition vertically, while the "H" button splits it horizontally.
- Color Assignment: When a partition is split, one partition retains its original color, and the other gets a new random color.
- Recursive Splitting: Newly created partitions also have "V" and "H" buttons, allowing for further splitting.
- Removable Partitions: Partitions can be removed using a "-" button.
- Resizable Partitions: Partitions can be resized by clicking and dragging the borders, with snapping to 1/4, 1/2, and 3/4 ratios.
## Installation

- Clone the repository: <br />
  `git clone https://github.com/Pronoy568/Recursive-Partitioning` <br />
  `cd Recursive-Partitioning`
- Install dependencies:
  npm install
- Start the development server:
  npm start
## Usage

- Open the application in your web browser.
- The initial screen displays two buttons, "V" and "H", in the center.
- Click "V" to split the partition vertically or "H" to split it horizontally.
- Each new partition will also have "V" and "H" buttons for further splitting.
- To remove a partition, click the "-" button within that partition.
- Resize partitions by clicking and dragging the borders; they will snap to 1/4, 1/2, and 3/4 ratios for easy layout management.

## Example Scenarios

- Initial state: A single partition with "V" and "H" buttons in the center.
- After clicking "V": The screen splits into two vertical partitions, each with "V" and "H" buttons.
- Further splitting: Any partition can be split further using the "V" and "H" buttons, and partitions can be removed using the "-" button.

## Live Link: https://pronoy568.github.io/Recursive-Partitioning/
