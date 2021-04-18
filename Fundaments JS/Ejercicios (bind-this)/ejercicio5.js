const me = {
  fullname: "Bob Square",
  sister: {
    fullname: "Arenita la ardilla",
  },
  mother: {
    fullname: "Margaret Square",
  },
  father: {
    fullname: "Harold Square",
  },
  saludar() {
    console.log(`Nombre: ${this.fullname}`);
  },
  bailar(tipo) {
    console.log(`Ey, ${this.fullname}, estas bailando ${tipo}`);
  },
};

const others = {
  boss: {
    fullname: "Don Cangrejo",
  },
  friend: {
    fullname: "Calamardo",
  },
};

me.saludar(); // Nombre: Bob Square

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

me.bailar.call(others.friend, 'Tango'); 
//Ey, Calamardo, estas bailando Tango

me.bailar.apply(others.friend, ["Tango"]);
//Ey, Calamardo, estas bailando Tango

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

saludarMama = me.saludar.bind(me.mother);
saludarMama(); // Nombre: Margaret Square

bailarJefe = me.bailar.bind(others.boss, 'Salsa');
bailarJefe(); // Ey, Don Cangrejo, estas bailando Salsa 

bailarJefe = me.bailar.bind(others.boss);
bailarJefe('merengue'); // Ey, Don Cangrejo, estas bailando merengue

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

