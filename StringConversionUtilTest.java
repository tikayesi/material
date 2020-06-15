package com.enigma.tdd;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.junit.rules.ExpectedException;

class StringConversionUtilTest {

	StringConversionUtil util = new StringConversionUtil();
	
	/*
	 * 
	 * buat implementasi method2 yang terdapat test case nya dibawah ini
	 * 
	 * 1. underscoredToCamelCase
	 * 		-convert string yang dipisahkan oleh underscore menjadi camelCase
	 * 		-string tidak boleh ada spasi
	 * 		-jika ada underscore yang bersebelahan, maka dianggap menjadi 1
	 * 
	 * 2. camelCaseToUnderscored
	 * 		-convert string yang berbentuk camelCase menjadi dipisahkan oleh underscore
	 * 		-string tidak boleh ada spasi dan underscore
	 * 		-jika ada lebih dari 1 huruf capital yang bersebelahan
	 * 			maka kumpulan sebelum huruf capital terakhir dianggap menjadi 1 bagian, 
	 * 			sedangkan huruf capital terakhir diperlakukan seperti camelCase biasa
	 * 		-angka diperlakukan seperti camelCase
	 * 		-tidak boleh menggunakan regex
	 */
	
	@Test
	public void testUnderscoredToCamelCase() {
		String underscored = "last_opened_date";
		String camelCased = "lastOpenedDate";
		assertEquals(camelCased, util.underscoredToCamelCase(underscored));
	}

	@Test
	public void testUnderscoredToCamelCaseConsecutiveUnderscore() {
		String underscored = "last_opened_date";
		String camelCased = "lastOpenedDate";
		assertEquals(camelCased, util.underscoredToCamelCase(underscored));
	}

	@Test
	public void testCamelCaseToUnderscored() throws Exception {
		String underscored = "last_opened_date";
		String camelCased = "lastOpenedDate";
		assertEquals(underscored, util.camelCaseToUnderscored(camelCased));
	}

	@Test
	public void testCamelCaseToUnderscoredWithConsecutiveUpper() {
		String underscored = "last_opened_date_acc_jenius";
		String camelCased = "lastOpenedDateACCJenius";
		assertEquals(underscored, util.camelCaseToUnderscored(camelCased));
	}

	@Test
	public void testCamelCaseToUnderscoredWithConsecutiveUpperAndNumber() {
		String underscored = "acc_jenius_1_acc_tahapan_123";
		String camelCased = "ACCJenius1ACCTahapan123";
		assertEquals(underscored, util.camelCaseToUnderscored(camelCased));
	}

	@Test
	public void testCamelCaseToUnderscoredContainSpaceBetween() {
		String underscored = "last_opened_date";
		String camelCased = "last Opened Date";
		
		YourException ex = assertThrows(YourException.class, 
					()->{
		                util.camelCaseToUnderscored(camelCased);
					}
		);
		assertEquals("String tidak boleh mengandung spasi", ex.getMessage());
	}

	@Test
	public void testCamelCaseToUnderscoredContainSpaceBeforeAfter()  {
		String underscored = "last_opened_date";
		String camelCased = " lastOpenedDate ";
		
		YourException ex = assertThrows(YourException.class, 
					()->{
						util.camelCaseToUnderscored(camelCased);
					}
		);
		assertEquals("String tidak boleh mengandung spasi", ex.getMessage());
	}

	@Test
	public void testCamelCaseToUnderscoredContainUnderscore() {
		String underscored = "last_opened_date";
		String camelCased = "last_Opened_Date";
		
		YourException ex = assertThrows(YourException.class, 
					()->{
		                util.camelCaseToUnderscored(camelCased);
					}
		);
		assertEquals("String tidak boleh mengandung underscore", ex.getMessage());
	}

}