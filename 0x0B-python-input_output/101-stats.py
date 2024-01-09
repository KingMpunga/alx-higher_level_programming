#!/usr/bin/python3
import sys

def print_metrics(total_size, status_codes):
    """
    Prints the computed metrics.

    Args:
    - total_size: Total file size.
    - status_codes: Dictionary containing the count of each status code.
    """
    print("File size: {}".format(total_size))
    for code in sorted(status_codes):
        print("{}: {}".format(code, status_codes[code]))

def main():
    total_size = 0
    status_codes = {200: 0, 301: 0, 400: 0, 401: 0, 403: 0, 404: 0, 405: 0, 500: 0}

    try:
        for i, line in enumerate(sys.stdin, 1):
            try:
                parts = line.split()
                total_size += int(parts[-1])
                status_code = int(parts[-2])

                if status_code in status_codes:
                    status_codes[status_code] += 1

                if i % 10 == 0:
                    print_metrics(total_size, status_codes)

            except (ValueError, IndexError):
                pass

    except KeyboardInterrupt:
        print_metrics(total_size, status_codes)

if __name__ == "__main__":
    main()

