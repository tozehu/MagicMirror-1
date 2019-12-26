# MagicMirror
MultiArch Testbuild for MagicMirror

When I started to test MagicMirror with the original Docker-Image (https://hub.docker.com/r/karsten13/magicmirror) it did not work for me on my Raspberry PI4 because it states 'Exec Format error'

So I decided to try MultiArch-Compiling via Docker-Hub by myself.

After the compiling worked, I changed the initial Config a little bit, so that you will get a working Server-Only Container right out of the box.

I can only test arm32 and amd64 by myself, so arm64 is compiled but not tested.
