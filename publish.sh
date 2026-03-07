#!/bin/bash
# Script para publicar componentes de Byteflow-UI (Monorepo)
# Salta paquetes que ya existen con la misma versión en NPM

for dir in packages/*; do
  if [ -d "$dir" ] && [ -f "$dir/package.json" ]; then
    # Obtener info del paquete sin entrar en la carpeta
    NAME=$(node -p "require('./$dir/package.json').name")
    VERSION=$(node -p "require('./$dir/package.json').version")

    echo "🔍 Comprobando $NAME@$VERSION..."
    
    # Verificar si ya existe en el registro
    if ! npm view "$NAME@$VERSION" version > /dev/null 2>&1; then
      echo "🚀 Publicando nuevo componente: $NAME..."
      npm publish "./$dir" --access public
    else
      echo "✅ $NAME@$VERSION ya existe en NPM, saltando..."
    fi
    echo "-----------------------------------"
  fi
done
