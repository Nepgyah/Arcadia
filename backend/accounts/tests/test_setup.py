from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
from accounts.models import User

class TestSetup(APITestCase):
    
    def setUp(self):
        self.login_url = reverse('account:auth-login')
        self.logout_url = reverse('account:auth-logout')
        self.user_data = {
            'username': 'testuser123',
            'email': 'testemail@d2x.org',
            'password': 'TestPassword369'
        }

        self.test_user_username = 'TestUser1337'
        self.test_user_email = 'ArcadiaTest@d2x.org'
        self.test_user_password = 'SuccessfulPass369'
        self.test_user_obj = User.objects.create_user(
            username='TestUser1337',
            email='ArcadiaTest@d2x.org',
            password='SuccessfulPass369',
            is_active=True
        )
        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()