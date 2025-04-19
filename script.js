const scenes = [
    {
      id: 'inicio',
      title: 'Comienzo de la Aventura',
      text: 'Tu profesor te da una misión secreta: entregar un trabajo académico sin caer en los errores del plagio. ¿Qué harás?',
      image: 'https://cdn-icons-png.flaticon.com/512/2474/2474953.png',
      options: [
        { text: 'Investigar por tu cuenta', next: 'escena1' },
        { text: 'Pedir un par de ideas a un compañero', next: 'escena2' }
      ]
    },
    {
      id: 'escena1',
      title: 'Misterio en las Fuentes',
      text: 'Encuentras varios artículos y algunos no tienen autores. ¿Qué hacer?',
      image: 'https://cdn-icons-png.flaticon.com/512/3806/3806972.png',
      options: [
        { text: 'Usar solo las fuentes claras y bien citadas', next: 'escena3' },
        { text: 'Incluir todo y cambiar un par de palabras', next: 'escena4' }
      ]
    },
    {
      id: 'escena2',
      title: 'El Reto del Material Ajeno',
      text: 'Un compañero te ofrece parte de su trabajo como referencia. ¿Aceptarás?',
      image: 'https://cdn-icons-png.flaticon.com/512/3110/3110131.png',
      options: [
        { text: 'Usarlo como inspiración, pero citarlo correctamente', next: 'escena5' },
        { text: 'Reescribirlo y entregar como propio', next: 'escena6' }
      ]
    },
    {
      id: 'escena3',
      title: 'Citación Incompleta',
      text: 'Tienes citas, pero la bibliografía es un caos. ¿Qué harás?',
      image: 'https://cdn-icons-png.flaticon.com/512/2218/2218035.png',
      options: [
        { text: 'Citar correctamente, todo al pie de la letra', next: 'escena7' },
        { text: 'Escribir una bibliografía breve y no tan precisa', next: 'escena6' }
      ]
    },
    {
      id: 'escena4',
      title: 'La Tentación del Plagio',
      text: 'El trabajo tiene una fecha límite y las fuentes no están claras. ¿Será grave un pequeño "corte" de citas?',
      image: 'https://cdn-icons-png.flaticon.com/512/3443/3443736.png',
      options: [
        { text: 'Buscar la cita correcta, aunque sea tarde', next: 'escena7' },
        { text: 'Usar citas de dudosa procedencia para salir del paso', next: 'escena6' }
      ]
    },
    {
      id: 'escena5',
      title: 'El Reto Final',
      text: 'Tu trabajo está listo, pero sientes que el contenido podría mejorar. ¿Añadirías algo más?',
      image: 'https://cdn-icons-png.flaticon.com/512/3009/3009200.png',
      options: [
        { text: 'Incluir más citas, claras y bien hechas', next: 'escena8' },
        { text: 'Modificar un par de citas y entregarlo como está', next: 'escena6' }
      ]
    },
    {
      id: 'escena6',
      title: 'La Revelación',
      text: 'El profesor te llama a su oficina: tu trabajo tiene problemas de plagio. ¿Cómo reaccionas?',
      image: 'https://cdn-icons-png.flaticon.com/512/3144/3144051.png',
      options: [
        { text: 'Revisar y corregir lo que se pueda', next: 'escena9' },
        { text: 'Negar todo, ya está entregado', next: 'escena10' }
      ]
    },
    {
      id: 'escena7',
      title: 'Luz en el Camino',
      text: 'Tu trabajo está perfectamente citado y es completamente original. El profesor te felicita.',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      options: [
        { text: 'Avanzar al siguiente nivel', next: 'final' }
      ]
    },
    {
      id: 'escena8',
      title: 'Última Oportunidad',
      text: 'El trabajo ya está listo, pero ¿deberías agregar más fuentes? El profesor valora eso.',
      image: 'https://cdn-icons-png.flaticon.com/512/4236/4236965.png',
      options: [
        { text: 'Sí, añadir más fuentes correctamente citadas', next: 'final' },
        { text: 'No, ya está bien como está', next: 'escena6' }
      ]
    },
    {
      id: 'final',
      title: 'Fin del Viaje',
      text: '¡Lo lograste! El plagio no fue parte de tu viaje. Ahora puedes avanzar en tu carrera académica.',
      image: 'https://cdn-icons-png.flaticon.com/512/3410/3410534.png',
      options: [
        { text: 'Empezar de nuevo', next: 'inicio' }
      ]
    }
  ];
  
  function renderScene(id) {
    const app = document.getElementById('app');
    const scene = scenes.find(s => s.id === id);
    const section = document.createElement('section');
    section.className = 'scene';
    section.innerHTML = `
      <img src="${scene.image}" alt="Escena">
      <h1>${scene.title}</h1>
      <p>${scene.text}</p>
      ${scene.options.map(opt =>
        `<button onclick="renderScene('${opt.next}')">${opt.text}</button>`
      ).join('')}
    `;
    app.innerHTML = '';
    app.appendChild(section);
    section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  
    const progreso = Math.round((scenes.indexOf(scene) + 1) / scenes.length * 100);
    document.getElementById('camino').style.width = `${progreso}%`;
  }
  
  window.onload = () => {
    renderScene('inicio');
  };
  