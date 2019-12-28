#!/bin/bash
set -e

if [ ! "$(ls -A /opt/magic_mirror/modules)" ]; then
    cp -Rn /opt/default_modules/. /opt/magic_mirror/modules
fi

if [ ! "$(ls -A /opt/magic_mirror/config)" ]; then
    cp /opt/magic_mirror/server-only-default-config.js /opt/magic_mirror/config/config.js
	cp /opt/magic_mirror/server-only-german-sample-config.js /opt/magic_mirror/config/server-only-german-sample-config.js
fi

exec "$@"