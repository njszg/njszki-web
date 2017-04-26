var expect = chai.expect;

describe('Első', function() {
  xdescribe('Gyalog', function() {
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
  
  describe('Mező-e?', function() {
	
	it('a2', function() {
		expect(mezoE("a2")).to.be.true;
	});	
	
	it('h9', function() {
		expect(mezoE("h9")).to.be.false;
	});	

	it('A2', function() {
		expect(mezoE("A2")).to.be.false;
	});	

	it('u3', function() {
		expect(mezoE("u3")).to.be.false;
	});	

	it('3a', function() {
		expect(mezoE("3a")).to.be.false;
	});	
	
  });
	
  describe('Bástya', function() {
	
	it('Szabályos lépés a1-a5', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('vB'),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","a5"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabályos lépés a1-b1', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vB'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","b1"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabálytalan lépés a1-c3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 21,
			hiba: "Szabálytalan bástya lépés."
		};
		
		var lepes = ["a1","c3"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
  });
  
  describe('Futó', function() {
	
	it('Szabályos lépés a1-c3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vF'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('vF'),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","c3"];
		var utana = lep(elotte, lepes);
		
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	
	
	it('Szabálytalan lépés a1-a2', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vF'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 31,
			hiba: "Szabálytalan futó lépés."
		};
		
		var lepes = ["a1","a2"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
  });
  
  describe('Vezér', function() {
	
	it('Szabályos lépés, átlós a1-c3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vV'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('vV'),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","c3"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabályos lépés, vízszintes a1-a3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vV'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('vV'),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","a3"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabálytalan lépés a1-b3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vV'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 41,
			hiba: "Szabálytalan vezér lépés."
		};
		
		var lepes = ["a1","b3"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
  });
  
  
  describe('Huszár', function() {
	
	it('Szabályos lépés, lóugrás a1-b3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vH'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('vH'),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","b3"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabálytalan lépés a1-a2', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vH'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 51,
			hiba: "Szabálytalan huszár lépés."
		};
		
		var lepes = ["a1","a2"];
		var utana = lep(elotte, lepes);

		expect(utana).to.be.deep.equal(elvart);
	});	
	
  });
  
  describe('Király', function() {
	
	it('Szabályos lépés a1-b2', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vK'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
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
				'a': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('vK'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["a1","b2"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabálytalan lépés a1-a3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vK'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 61,
			hiba: "Szabálytalan király lépés."
		};
		
		var lepes = ["a1","a3"];
		var utana = lep(elotte, lepes);
		
		expect(utana).to.be.deep.equal(elvart);
	});	
	
  });
  
  
  describe('Sáncolás', function() {
	
	it('Szabályos sáncolás, rövid oldalon', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
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
				'e': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["e1", "g1"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabályos sáncolás, hosszú oldalon', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			lep: "sotet",
			mezok: {
				'a': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('  '),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var lepes = ["e1", "c1"];
		var utana = lep(elotte, lepes);
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	it('Szabálytalan lépés a1-a3', function() {
		var elotte = {
			lep: "vilagos",
			mezok: {
				'a': [null, b('vK'),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')],
				'b': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'c': [null, b('  '),b('  '),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'd': [null, b('vV'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sV')],
				'e': [null, b('vK'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sK')],
				'f': [null, b('vF'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sF')],
				'g': [null, b('vH'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sH')],
				'h': [null, b('vB'),b('vG'),b('  '),b('  '),b('  '),b('  '),b('sG'),b('sB')]
			}
		};
		
		var elvart = {
			kod: 61,
			hiba: "Szabálytalan király lépés."
		};
		
		var lepes = ["a1","a3"];
		var utana = lep(elotte, lepes);
		
		expect(utana).to.be.deep.equal(elvart);
	});	
	
	xit('Szabálytalan sánc - már elléptek', function() {
	});	
	
	xit('Szabálytalan sánc - sakkból', function() {
	});	

	xit('Szabálytalan sánc - sakkba', function() {
	});	

	xit('Szabálytalan sánc - sakkon át', function() {
	});	

  });
  
  describe('Gyalog', function(){
    xit('nyitó lépés (2-t lép)', function(){
    });
	
	xit('sima lépés', function(){
    });
	
	xit('ütés - átlóban', function(){
    });
	  
	xit('en passant', function(){
    });
	
	xit('beváltás', function(){
    });

	xit('szabálytalan', function(){
    });

	
  });
  
  describe('Sötét lép', function(){
    xit('', function(){
    });
	
	xit('', function(){
    });
	
	xit('', function(){
    });
	  
  });
  
  describe('Sakkadás', function(){
    xit('', function(){
    });
	
	xit('', function(){
    });
	
	xit('', function(){
    });
	  
  });
  
  describe('Speciális történések', function(){
    xit('Ütés', function(){
    });
	
	xit('Nem üres oda az út', function(){
    });
	
	xit('Üres mezőről lépés', function(){
    });
	
	xit('Továbbiak', function(){
    });
	  
  });
  
  describe('Végjáték', function(){
    xit('Sakk-matt', function(){
    });
	
	xit('Patt - nem tud lépni', function(){
    });
	
	xit('50 lépéses patt', function(){
    });
	  
  });
  
  describe('', function(){
    xit('', function(){
    });
	
	xit('', function(){
    });
	
	xit('', function(){
    });
	  
  });
});
