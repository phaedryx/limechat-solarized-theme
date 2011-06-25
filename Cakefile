sys     = require 'sys'
{spawn} = require 'child_process'

task "watch", "watch and compile coffeescript files when modified", ->
  source_dir = '.'
  dest_dir   = '.'
  sys.puts "Starting coffeescript watcher..."
  sys.puts "#{source_dir} -> #{dest_dir}"
  observer = spawn 'coffee', ['-cwl', '-o', dest_dir, source_dir]

  [observer].forEach (child) ->
    child.stdout.on 'data', (data) -> sys.print data
    child.stderr.on 'data', (data) -> sys.print data