var expect = chai.expect;

describe('Első', function() {
  describe('Páros függvény', function() {
	it('Páros', function() {
		var eredmeny = paros(4);
		expect(eredmeny).to.be.equal(true);		
	});
	
	it('Páratlan', function() {
		var eredmeny = paros(3);
		expect(eredmeny).to.be.equal(false);		
	});
	
	it('Nulla', function() {
		var eredmeny = paros(0);
		expect(eredmeny).to.be.equal(true);		
	});

	it('Negatív szám', function() {
		var eredmeny = paros(-2);
		expect(eredmeny).to.be.equal(true);		
	});
	
	it('Karakter', function() {
		var eredmeny = paros('a');
		expect(eredmeny).to.be.NaN;		
	});
	
	it('Null', function() {
		var eredmeny = paros(null);
		expect(eredmeny).to.be.NaN;		
	});
	
  });

  describe('Bankkártyaszám', function() {
	it('Tényleg számokból áll', function() {
		var eredmeny = ervenyes('1234-5678-1234-5678');
		expect(eredmeny).to.be.equal(true);	
	});
  });
});
