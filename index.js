const my_build_var = process.env?.MY_BUILD_VAR;

if (my_build_var) {
	console.log(`MY_BUILD_VAR is ${my_build_var}`);
} else {
	console.log(`MY_BUILD_VAR has no value`);
	process.exit(1);
}
