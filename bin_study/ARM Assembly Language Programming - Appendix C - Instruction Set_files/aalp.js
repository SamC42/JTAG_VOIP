/**
 * This function generates the HTML for a register-type table.
 * The argument is an array of arrays.
 * Each element of the outer array has three elements:
 *  The HI bit number for the field
 *  The LO bit number for the field
 *  The label for the field
 * The register is drawn using cell border styles, and doesn't
 * work with NS 4.x or earlier.
 */
function regTable(fields) {
	document.writeln('<table border=0 cellspacing=0 cellpadding=2>');
	document.write('<tr>');
	var i;
	for (i=0; i < fields.length; i++) {
		var f, hi, lo, label;
		f = fields[i];
		hi = f[0];
		lo = f[1];
		label = f[2];
		if (hi == lo) {
			document.write('<td class="is-grid-bit" align="center">'+lo+'</td>');
		} else {
			document.write('<td class="is-grid-bit">'+hi+'</td><td class="is-grid-bit" align="right">'+lo+'</td>');
		}
	}
	document.writeln('</tr>');
	document.write('<tr>');
	var i;
	for (i=0; i < fields.length; i++) {
		var f, hi, lo, label;
		f = fields[i];
		hi = f[0];
		lo = f[1];
		label = f[2];
		document.write('<td class="is-grid-label" align="center" width="' + (hi-lo+1)*18 + '"');
		if (hi != lo) {
			document.write(' colspan="2"');
		}
		var style;
		if (i == 0) {
			style = "border-style: solid;";
		} else {
			style = "border-style: solid solid solid none;";
		}
		document.write('style="border-color: black; border-width: 1px; ' + style + '">'+label+'</td>');
	}
	document.writeln('</tr>');
	document.writeln('</table>');
}
