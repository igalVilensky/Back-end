const args = process.argv.slice(2);

const firstCapital = (args) => {
  return args.charAt(0).toUpperCase() + args.slice(1).toLowerCase();
};

console.log(firstCapital("this is J DSFSDFest"));
