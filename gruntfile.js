module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Compilação de LESS para CSS
      less: {
          development: {
              files: {
                  'dist/css/styles.css': 'src/less/styles.less'
              }
          }
      },

      // Minificação de CSS
      cssmin: {
          target: {
              files: {
                  'dist/css/styles.min.css': ['dist/css/styles.css']
              }
          }
      },

      // Minificação de JS
      uglify: {
          my_target: {
              files: {
                  'dist/js/scripts.min.js': ['src/js/scripts.js']
              }
          }
      },

      // Cópia de arquivos HTML
      copy: {
          main: {
              expand: true,
              cwd: 'src/',
              src: ['*.html'],
              dest: 'dist/'
          }
      },

      // Otimização de imagens
      imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'src/images/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'dist/images/'
              }]
          }
      },

      // Criação de miniaturas
      responsive_images: {
          myTask: {
              options: {
                  engine: 'im',
                  sizes: [
                      {
                          name: 'small',
                          width: 320,
                          quality: 80
                      },
                      {
                          name: 'medium',
                          width: 640,
                          quality: 80
                      },
                      {
                          name: 'large',
                          width: 1024,
                          quality: 80
                      }
                  ]
              },
              files: [{
                  expand: true,
                  src: ['**/*.{jpg,gif,png}'],
                  cwd: 'src/images/',
                  dest: 'dist/images/'
              }]
          }
      },

      // Watch para alterações
      watch: {
          styles: {
              files: ['src/less/**/*.less'],
              tasks: ['less', 'cssmin'],
              options: {
                  livereload: true,
              }
          },
          scripts: {
              files: ['src/js/**/*.js'],
              tasks: ['uglify'],
              options: {
                  livereload: true,
              }
          },
          html: {
              files: ['src/**/*.html'],
              tasks: ['copy'],
              options: {
                  livereload: true,
              }
          },
          images: {
              files: ['src/images/**/*.{png,jpg,gif}'],
              tasks: ['imagemin', 'responsive_images'],
              options: {
                  livereload: true,
              }
          }
      },

      // Configuração do Live Reload
      connect: {
          server: {
              options: {
                  port: 9001,
                  base: 'dist',
                  livereload: true,
                  open: true
              }
          }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy', 'imagemin', 'responsive_images', 'connect', 'watch']);
};