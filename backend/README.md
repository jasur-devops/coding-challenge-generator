# Backend Service

The backend service for the Coding Challenge Generator, built with Python.

## Setup

1. Ensure you have the uv package manager installed
2. Create and activate the virtual environment:
```bash
uv venv
source .venv/bin/activate  # On Unix/macOS
# or
.venv\Scripts\activate     # On Windows
```

3. Install dependencies:
```bash
uv pip install .
```

## Project Structure

- `main.py` - Entry point of the application
- `pyproject.toml` - Project dependencies and configuration
- `uv.lock` - Lock file for dependencies

## Development

To run the development server:

```bash
python main.py
```

## Adding Dependencies

To add new dependencies:

1. Add them to `pyproject.toml`
2. Run `uv pip install .`

## Testing

Tests will be added in a future update.

## API Documentation

API documentation will be added as endpoints are implemented.