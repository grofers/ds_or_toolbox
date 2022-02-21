#!/bin/sh

# Create a new Sentry release and upload sourcemaps to sentry

# Verify sentry configuration
sentry-cli info

# Fetch the latest commit hash as the release version
VERSION=`sentry-cli releases propose-version`

# Needs GitHub repository <-> Sentry integration to associate commits with releases
# sentry-cli releases set-commits --auto $VERSION

# Start creating a new release
sentry-cli releases new $VERSION

# Upload sourcemaps to sentry
sentry-cli releases files $VERSION upload-sourcemaps --rewrite html/static/js/ --url-prefix '~/static/js'

# Finalize sentry release
sentry-cli releases finalize $VERSION

# Verify sourcemaps uploaded for the release
sentry-cli releases files $VERSION list

# Append the config file with the release name
echo "window.REACT_APP_SENTRY_RELEASE = '$VERSION'" >> html/config.js
