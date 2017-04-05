var expect = chai.expect;

describe('Első', function() {
  describe('Teszteset', function() {
	it('Szabálytalan lépés', function() {
		var elotte = [];
		var lepes = "a9";
		var utana = lep(elotte, lepes);
		expect(utana.hiba).to.be.equal("Szabálytalan lépés.");
	});
	
	it('Szabályos lépés - d4', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			lep: "sotet",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('  '),b('  '),b('vG'),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = "d4";
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});

	it('Szabályos lépés - e4', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			lep: "sotet",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('  '),b('  '),b('vG'),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = "e4";
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});
	
	it('Szabályos lépés - e3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			lep: "sotet",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('  '),b('vG'),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = "e3";
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});
	
	it('Szabálytalan gyalog lépés - e2', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			hiba: "Szabálytalan lépés."
		};
		
		var lepes = "e2";
		var utana = lep(elotte, lepes);
		expect(utana.hiba).to.be.equal("Szabálytalan lépés.");
	});
	
	
	
  });
});
