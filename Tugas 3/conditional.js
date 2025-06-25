const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan namamu: ", function(outNama) {
  const nama = outNama.trim();

  if (!nama) {
    console.log("Nama harus diisi!");
    rl.close();
    return;
  }

  rl.question("Pilih peranmu (Penyihir, Guard, atau Werewolf): ", function(outPeran) {
    const peran = outPeran.trim().toLowerCase();

    if (!peran) {
      console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
    } else {
      console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
      switch (peran) {
        case "penyihir":
          console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);
          break;
        case "guard":
          console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
          break;
        case "werewolf":
          console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`);
          break;
        default:
          console.log("Peran tidak dikenali. Pilih antara Penyihir, Guard, atau Werewolf.");
      }
    }
    rl.close();
  });
});
