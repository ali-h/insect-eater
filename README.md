# Insect Eater
A simple graphical game where an owl eats insects and looks at them when moved. This React-based game allows you to drag and drop different insects into a draggable area where an owl is waiting to eat them. The owl's eyes track the insects as they move, adding a dynamic element to the game.

![image](https://github.com/user-attachments/assets/8b7e9c29-013b-4a08-a0fd-dd5c9c96b6fe)

## Features

- **Draggable Insects**: Insects are draggable in the area below the tiles.
- **Owl's Eye Movement**: The owl's eyes adjust position to follow the current focused insect.
- **Eating Mechanism**: Insects disappear when they enter the owl's mouth area.
- **Score**: The score is incremented when an insect is eaten.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ali-h/insect-eater.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd insect-eater
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

1. **Start the development server**:
    ```bash
    npm start
    ```

2. **Open your browser and go to**: [http://localhost:3000](http://localhost:3000)

3. **Interact with the game**:
    - Drag the insects around within the designated area.
    - Watch as the owl’s eyes follow the insects.
    - Drag an insect into the owl’s mouth area to make it disappear.
    - Observe the score increasing with each insect eaten.

## Project Structure

- `src/components/`: Contains React components for the Owl, Insects, and InsectTiles.
- `src/styles/`: Contains CSS files for styling the components.

## License

This project is licensed under the MIT License.
