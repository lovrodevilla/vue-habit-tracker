Aplikacija se lokalno pokreće (preko github linka):
-otvori link projekta na githubu: https://github.com/lovrodevilla/vue-habit-tracker
-preuzmi zip: klik na padajući izbornik "<> code" i odaberi "Download ZIP"
-odpakiraj zip i u visual studio code-u otvori folder "vue-habit-tracker-main" (pripazi da uđeš u istoimeni folder unutart tog foldera)
-u terminal koji je pozicioniran u mapu preuzetog foldera izvrši "npm install"
-zatim u terminal upiši "npm run dev"
-aplikacija se time pokreće lokalno na portu 3000

Aplikacija se pokreće lokalno (preko zipa):
-odpakiraj zip i u visual studio code-u otvori folder "vue-habit-tracker-main"
-u terminal koji je pozicioniran u mapu preuzetog foldera izvrši "npm install"
-zatim u terminal upiši "npm run dev"
-aplikacija se time pokreće lokalno na portu 3000


URL aplikacije: https://vue-habit-tracker.onrender.com

1. interpolation/one-way binding - Da, src/components/Home.vue, :20 
   <span>{{ habit.name }} ({{ habit.time }})</span>
2. two-way binding - Da, src/components/AddHabit.vue, :9, :19
   v-model="newHabit.name" i v-model="newHabit.time"
3. methods - Da, src/components/AddHabit.vue, :41 
   emitAddHabit, resetForm
4. computed properties - Da, src/components/Stats.vue, :28, :32, :35, :38 
   habits, totalHabits, completedHabits, pendingHabits
5. barem jedan scoped style - Da, src/components/Stats.vue, :45
6. koristiti barem jedan lifecycle hook - Da, src/components/Home.vue, :50 
   onMounted hook, onBeforeUnmount hook
7. routing (više stranica) - Da, src/router/index.js, :4
   definirane sve rute na 3 različite stranice: root stranica - /, /add, /stats
	svi ostali nepostojeći linkovi dinamički usmjeravaju na NotFound odnosno 404, src/router/index.js, :21
8. komponenta bez stanja: NotFound.vue 
	komponenta sa stanjem: Home.vue
   Komponenta bez stanja, koristiti properties - Da, src/components/NotFound.vue, :12 (od rutera prihvaća string - link koji ne postoji i na NotFound stranici ga samo ne ispisuje, a ne manipulira s njim)
   Komponenta sa stanjem - Da, src/components/AddHabit.vue, :61, :65 (metode toggleComplete i deleteHabit mijenjaju stanje habita u bazi, lokalno i tom promijenom stanja se mijenja i prikaz podataka na UI)
9. barem jedna komponenta mora emitirati barem jedan event - Da, src/components/Home.vue, :65
	(deleteHabit emitira habit-deleted na AddHabitView src/views/HomeView.vue, :3 gdje se zove metoda showMessage() koja prikazuje poruku da je habit obrisan, tu poruku dobiva iz Home.vue "The habit has been deleted.")
10. store (Pinia) - Da, src/stores/habitStore.js
	U ovoj datoteci se nalazi sva logika za manipulaciju s podacima i stanjima habita u svim komponentama.
11. asinkroni dohvat podataka s backenda - Da, src/firebase.js
	Podatke u svojoj Firebase bazi sinkroniziram s podacima u Pinia store i pohranjujem u tu svoju backend bazu.
	Konfiguracija baze i logika dodavanja, brisanja i mijenjanja podataka u bazi nalazi se u firebase.js datoteci.  