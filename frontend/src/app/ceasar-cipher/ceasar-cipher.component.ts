import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ceasar-cipher',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './ceasar-cipher.component.html',
  styleUrl: './ceasar-cipher.component.css'
})
export class CeasarCipherComponent {
  shiftValue: number = 0;
  plainText: string = '';
  encryptedText: string = '';
  decryptedText: string = ''; // Add a property for the decrypted text

  constructor(private dataService: DataService) {}

  encrypt() {
    this.encryptedText = this.caesarCipher(this.plainText, this.shiftValue);
  }

  decrypt() {
    this.decryptedText = this.caesarCipher(this.encryptedText, -this.shiftValue);
    this.saveData();
  }

  caesarCipher(text: string, shift: number): string {
    return text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
      }
      return char;
    }).join('');
  }
  
  saveData() {
    const data = {
      shift_value : this.shiftValue,
      plain_text : this.plainText,
      encrypted_text: this.encryptedText,
      decrypted_text: this.decryptedText,
    };

    this.dataService.saveData(data).subscribe(
      response => {
        console.log('Data saved:', response); // Fetch updated data after saving
      },
      error => {
        console.error('Error saving data:', error);
      }
    );
  }
}

