#!/usr/bin/env python3
"""
Backend API Testing for Estudio Jurídico Robledo y Cía
Tests the contact form API endpoint
"""

import requests
import sys
import json
from datetime import datetime

class ContactAPITester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        if data:
            print(f"   Data: {json.dumps(data, indent=2)}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text}")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error Response: {json.dumps(error_data, indent=2)}")
                except:
                    print(f"   Error Response: {response.text}")
                return False, {}

        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection Error: Could not connect to {url}")
            print("   Make sure the Next.js server is running on localhost:3000")
            return False, {}
        except requests.exceptions.Timeout:
            print(f"❌ Failed - Timeout: Request took longer than 10 seconds")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_valid_contact_form(self):
        """Test valid contact form submission"""
        valid_data = {
            "nombre": "Test Usuario",
            "email": "test@example.com",
            "telefono": "+56 9 1234 5678",
            "asunto": "corporativo",
            "mensaje": "Este es un mensaje de prueba"
        }
        
        success, response = self.run_test(
            "Valid Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=valid_data
        )
        return success and response.get('success') == True

    def test_missing_required_fields(self):
        """Test form submission with missing required fields"""
        invalid_data = {
            "telefono": "+56 9 1234 5678",
            "asunto": "corporativo"
            # Missing nombre, email, mensaje
        }
        
        success, response = self.run_test(
            "Missing Required Fields",
            "POST",
            "api/contact",
            400,
            data=invalid_data
        )
        return success and 'error' in response

    def test_invalid_email_format(self):
        """Test form submission with invalid email"""
        invalid_email_data = {
            "nombre": "Test Usuario",
            "email": "invalid-email",
            "telefono": "+56 9 1234 5678",
            "asunto": "corporativo",
            "mensaje": "Este es un mensaje de prueba"
        }
        
        success, response = self.run_test(
            "Invalid Email Format",
            "POST",
            "api/contact",
            400,
            data=invalid_email_data
        )
        return success and 'error' in response

    def test_minimal_valid_form(self):
        """Test form with only required fields"""
        minimal_data = {
            "nombre": "Usuario Mínimo",
            "email": "minimal@test.com",
            "mensaje": "Mensaje mínimo requerido"
        }
        
        success, response = self.run_test(
            "Minimal Valid Form",
            "POST",
            "api/contact",
            200,
            data=minimal_data
        )
        return success and response.get('success') == True

    def test_empty_request(self):
        """Test completely empty request"""
        success, response = self.run_test(
            "Empty Request Body",
            "POST",
            "api/contact",
            400,
            data={}
        )
        return success and 'error' in response

def main():
    print("🚀 Starting Backend API Tests for Estudio Jurídico Robledo y Cía")
    print("=" * 60)
    
    tester = ContactAPITester()
    
    # Run all tests
    tests = [
        ("Valid Contact Form", tester.test_valid_contact_form),
        ("Missing Required Fields", tester.test_missing_required_fields),
        ("Invalid Email Format", tester.test_invalid_email_format),
        ("Minimal Valid Form", tester.test_minimal_valid_form),
        ("Empty Request", tester.test_empty_request),
    ]
    
    failed_tests = []
    
    for test_name, test_func in tests:
        try:
            if not test_func():
                failed_tests.append(test_name)
        except Exception as e:
            print(f"❌ Test '{test_name}' crashed: {str(e)}")
            failed_tests.append(test_name)
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {len(failed_tests)}")
    
    if failed_tests:
        print(f"\n❌ Failed Tests:")
        for test in failed_tests:
            print(f"   - {test}")
        return 1
    else:
        print(f"\n✅ All tests passed!")
        return 0

if __name__ == "__main__":
    sys.exit(main())