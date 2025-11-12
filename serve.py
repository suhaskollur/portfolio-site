#!/usr/bin/env python3
import http.server
import socket
import socketserver
import threading
import webbrowser
import contextlib
import sys


class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


def find_free_port(host: str = "127.0.0.1") -> int:
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as s:
        s.bind((host, 0))
        return s.getsockname()[1]


def run_server(directory: str = ".", host: str = "127.0.0.1", port: int | None = None):
    Handler = http.server.SimpleHTTPRequestHandler
    # Ensure we serve the specified directory
    def handler_factory(*args, **kwargs):
        return Handler(*args, directory=directory, **kwargs)

    chosen_port = port or find_free_port(host)
    httpd = ThreadingHTTPServer((host, chosen_port), handler_factory)
    url = f"http://{host}:{chosen_port}"
    print(f"Serving {directory} at {url} (Ctrl+C to stop)")

    # Open browser after server is ready
    threading.Timer(0.2, lambda: webbrowser.open(url)).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
        print("Server stopped.")


if __name__ == "__main__":
    # Optional: accept a port from CLI, otherwise pick a free one
    desired_port = None
    if len(sys.argv) > 1:
        try:
            desired_port = int(sys.argv[1])
        except ValueError:
            print("Ignoring invalid port; auto-selecting a free port instead.")
            desired_port = None
    run_server(directory=".", host="127.0.0.1", port=desired_port)



